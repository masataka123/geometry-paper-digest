---
layout: paper
title: Kodaira-type Vanishings via Non-abelian Hodge Theory
title_ja: 非可換Hodge理論によるKodaira型消滅定理
authors: Chuanhao Wei
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: In this paper, we use nonabelian Hodge theory to study Kodaira-type vanishings. In particular, we generalize Saito vanishing using mixed twistor $\sD$-modules. We also generalize it to a Kawamata-Viehweg type vanishing using $\Q$-divisors, and prove an effective global generation theorem, as an application. We also prove a relative vanishing for a projective morphism in the mixed twistor $\sD$-module setting.
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- hodge-theory
- positivity
arxiv_id: 2207.09064v4
arxiv_url: https://arxiv.org/abs/2207.09064
arxiv_submitted: '2022-07-19'
arxiv_updated: '2026-10-25'
summary: 混合twistor D加群を用いて、Saito型およびKawamata–Viehweg型の消滅定理を統一的に扱う。境界に沿う延長とKashiwara–Malgrangeフィルトレーションを組み合わせ、Higgs側の消滅を得る。
abstract_en: ''
summary_en: The central question is which Kodaira-type cohomological vanishings persist beyond the setting of mixed Hodge modules. The paper works on the Dolbeault side of regular mixed twistor modules and incorporates boundary divisors through extension functors and compatible filtrations. Its two main theorems separate a semiample twist from a more refined numerical-divisor formulation. The introduction also explains the limits of this algebraic framework in recovering analytic vanishing results.
abstract_ja: 正則な混合twistor D加群のDolbeault側を使い、従来の混合Hodge加群に対する消滅定理を拡張する。半豊富な線束と境界因子を用いる基本形に加え、数値的な因子の分解とVフィルトレーションを用いたKawamata–Viehweg型の形を与える。相対消滅や有理因子に伴う乗数イデアルへの応用も扱うが、任意の解析的Nakano半正値束に対する消滅を包含するとは主張していない。
abstract_source_url: https://arxiv.org/abs/2207.09064
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2207.09064v4](https://arxiv.org/abs/2207.09064)
- **著者:** Chuanhao Wei
- **初回投稿日:** 2022-07-19
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kodaira型消滅定理は、線束の正値性をコホモロジーの消滅へ変換する。本論文は、混合Hodge加群に対するSaito消滅を、非可換Hodge理論に現れる混合twistor $\sD$加群へ拡張する。

一つ目の主定理は、半豊富な線束が境界を加えると豊富になる状況で、境界に沿う二種類の延長に対応した正負の次数の消滅を与える。二つ目は有理因子の数値的分解を使い、Kashiwara–Malgrangeフィルトレーションの切断位置まで反映した消滅を与える。後者は混合Hodge加群に制限しても新しい形であると著者は述べる。

Introductionは既知の消滅をこの枠組みに位置づけると同時に、適用限界も明確にする。扱う混合twistor加群は正則の場合であり、wildの場合への拡張はここで確認された結論ではない。また、解析的なNakano半正値ベクトル束から所要のtwistor加群を構成できるとは限らず、すべての解析的Nadel型消滅を回復するものではない。

## 背景と問題設定

$\mathcal X=X\times\mathbb C\_\lambda$上の右$\mathcal R\_{\mathcal X}$加群$\mathcal M$が、代数的・次数付き偏極可能・正則な混合twistor加群の構造を持つとする。$\Xi\_{\mathrm{Dol}}\mathcal M=\mathcal M/\lambda\mathcal M$はDolbeault側への特殊化である。混合Hodge加群のRees対象に適用すると、Hodgeフィルトレーションの随伴次数付き加群に戻る。

境界$E$に対する$\mathcal M[\ast E]$、$\mathcal M[!E]$は異なる延長を表す。下記の$\mathbb H^i$は超コホモロジーであり、単独の層の通常の$H^i$と混同しない。主定理の境界条件は、開部分の情報を正しい延長として射影多様体へ運ぶための条件である。

## 主結果

### Saito型のtwistor消滅（Theorem 1.3）

滑らかな複素射影多様体$X$、被約因子$E$、半豊富な線束$L$を取り、ある整数$d\geq0$で$L(dE)$が豊富とする。このとき

$$
\mathbb H^i\bigl(X,\operatorname{DR}\_X\Xi\_{\mathrm{Dol}}\mathcal M[\ast E]\otimes L\bigr)=0\quad(i>0),
$$

$$
\mathbb H^i\bigl(X,\operatorname{DR}\_X\Xi\_{\mathrm{Dol}}\mathcal M[!E]\otimes L^{-1}\bigr)=0\quad(i<0)
$$

が成り立つ。ここでは$E$に正規交差を要求しない。Hodge加群のRees対象に戻すと既知のSaito型消滅を含むため、これはその非可換Hodge理論への拡張である。

### 因子の数値的分解を反映する消滅（Theorem 1.4）

今度は$D=B+C$を滑らかな射影多様体上の被約正規交差因子とし、$\mathcal M(\ast D)$に$V^{(0)}$-compatibilityを仮定する。tame調和束に由来する場合はこの条件を満たす。$A$は半豊富で、ある$e\geq0$について$A+eC$が豊富とする。整数因子$L$が

$$
L\equiv\_{\mathrm{num}} aA+\mathbf bB+\mathbf cC,\qquad a>0
$$

を満たすとき、結論は

$$
\mathbb H^i\left(X,\operatorname{DR}\_{(X,D)}\left(\Xi\_{\mathrm{Dol}}V^{(0)B}\_{<-\mathbf b}V^{(0)C}\_{-\mathbf c}\mathcal M(\ast D)\right)\otimes\mathcal O\_X(L)\right)=0\quad(i>0),
$$

$$
\mathbb H^i\left(X,\operatorname{DR}\_{(X,D)}\left(\Xi\_{\mathrm{Dol}}V^{(0)B}\_{\mathbf b}V^{(0)C}\_{<\mathbf c}\mathcal M(\ast D)\right)\otimes\mathcal O\_X(-L)\right)=0\quad(i<0)
$$

である。$V$は各境界成分に沿う多重添字のKashiwara–Malgrangeフィルトレーションであり、厳密不等号の位置は二つの消滅で異なる。一般の多重フィルトレーションは整合的とは限らないため、compatibilityを省略してはいけない。

自明な変動や混合Hodge加群からの対象に特殊化すると、klt対のKawamata–Viehweg型消滅などに接続する。有理因子の乗数イデアルを用いるNadel型消滅、相対版、有効な大域生成への応用はIntroductionで予告されるが、その詳細な定式化は後続節に置かれている。

## 証明の見取り図

著者は、Esnault–Viehwegの巡回被覆による幾何学的構成、Saito消滅の証明、Sabbah–Mochizukiの混合twistor加群理論を組み合わせる。多重$V$フィルトレーションの整合性から対数的比較を得て、被覆で生じる局所系とフィルトレーションを制御する。相対版では単純なSerre消滅への帰着が使えないため、基本定理の関手的な証明を利用するという方針が説明されている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2207.09064)
- **Introduction:** [PDF](https://arxiv.org/pdf/2207.09064v4) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems 1.3、1.4（Theorems 1.1、1.2は比較対象となる既知の結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2207.09064v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
