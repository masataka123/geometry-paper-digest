---
layout: paper
title: 'K-energy for the coupled constant scalar curvature Kähler equation, I: Slope formula and semistability'
title_ja: 連成cscK方程式のKエネルギー、傾き公式と半安定性
authors: Akito Futaki, Jianwei Shi
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: In this paper we study coupled constant scalar curvature K\"ahler metrics defined by Datar-Pingali extending coupled K\"ahler-Einstein metrics defined by Hultgren-Witt Nystr\"om. We consider two K-energy functionals of which one (denoted $\mathcal{M}_{\operatorname{ccscK}}$) integrates the moment map considered by Datar-Pingali and the other (denoted $\mathcal{M}'$) is designed so that its slope at infinity for subgeodesic rays for ample test configurations with reduced central fiber coincides with the Donaldson-Futaki invariant considered by Hultgren-Witt Nystr\"om and Datar-Pingali. We also extend $\mathcal{M}_{\operatorname{ccscK}}$ to $\mathcal{H}^{1,\bar{1}}$ and the finite energy class $\mathcal{E}^1$, and prove its convexity along tuples of weak geodesics and finite energy geodesics, respectively. As a corollary, we obtain a semistability condition necessary for the existence of ccscK metrics.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- k-stability
- kahler-einstein-metrics
- pluripotential-theory
arxiv_id: 2610.34145v1
arxiv_url: https://arxiv.org/abs/2610.34145
arxiv_submitted: '2026-10-25'
arxiv_updated: '2026-10-25'
summary: 連成定スカラー曲率Kähler計量に対するMabuchiエネルギーを調べ、試験配置に沿う無限遠の傾きを交点数で表す。有限エネルギー空間への拡張と測地線凸性から、計量の存在に必要な連成K半安定性を導く。
abstract_en: ''
summary_en: Coupled scalar-curvature equations involve several Kähler classes and therefore require care in choosing an energy functional. The paper derives intersection-theoretic slopes for the functional whose critical points solve that equation. It compares this energy with another functional adapted to an earlier Donaldson–Futaki invariant, without identifying the two. Convexity and an extension to finite-energy potentials yield a necessary semistability condition for metric existence.
abstract_ja: 連成cscK方程式のモーメント写像を積分するエネルギーと、既存の連成Donaldson–Futaki不変量に傾きを合わせた別のエネルギーを区別して研究する。前者にChen–Tian型公式と試験配置に沿う傾き公式を与え、弱測地線および有限エネルギー測地線上の凸性を示す。その帰結として、連成cscK計量の存在から連成K半安定性が従う。
abstract_source_url: https://arxiv.org/abs/2610.34145
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34145v1](https://arxiv.org/abs/2610.34145)
- **著者:** Akito Futaki, Jianwei Shi
- **初回投稿日:** 2026-10-25
- **最終更新日:** 2026-10-25
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

通常のcscK問題では一つのKähler類の中で標準計量を探す。本論文は複数のKähler類を連成させた方程式について、解析的なエネルギーと代数的な退化の関係を明らかにする。

重要なのは、自然に現れる二つのエネルギーが同じではないという点である。モーメント写像を積分する $\mathcal M\_{\mathrm{ccscK}}$ は連成cscK解を臨界点に持つが、その傾きは従来の連成Donaldson–Futaki不変量とそのまま一致しない。著者らは後者に傾きを合わせた $\mathcal M'$ も構成し、両者を比較する。

主たる存在障害は前者のエネルギーから得られる。測地線凸性によって解は大域最小点となり、退化に沿う傾きが非負になる。さらに有限エネルギーのポテンシャルまで議論を拡張する。半安定性は必要条件であり、この論文のIntroductionは一般の逆向きの存在定理を主張していない。

## 背景と問題設定

複素次元 $n$ のコンパクト複素多様体にKähler形式 $\omega\_0,\ldots,\omega\_m$ を取り、$V\_i=[\omega\_i]^n$ と置く。連成cscK方程式は

$$
\frac{\omega\_0^n}{V\_0}=\cdots=\frac{\omega\_m^n}{V\_m},\qquad
S\_{\omega\_0}=\operatorname{tr}\_{\omega\_0}\Bigl(\sum\_{i=0}^m\omega\_i\Bigr)+\widehat S
$$

である。$\widehat S$ は位相的定数である。$c\_1(X)=\sum\_i[\omega\_i]$ の場合、これは $\operatorname{Ric}(\omega\_i)=\sum\_j\omega\_j$ という連成Kähler–Einstein方程式と同値になる。

以下の傾き公式で用いる別の定数は、$\alpha\_i=[\omega\_i]$ として

$$
S=-n\frac{\sum\_{i=1}^m\alpha\_i\cdot\alpha\_0^{n-1}}{\alpha\_0^n}
$$

である。$\widehat S$ と区別する。

## 主結果

### コホモロジー的傾き公式（Theorem 1）

各 $(X,\alpha\_i)$ の滑らかなコンパクト化された相対Kähler試験配置 $(\mathcal X\_i,\mathcal A\_i)$ が $X\times\mathbb P^1$ を支配するとする。それぞれに $C^{1,\bar1}$-compatibleなsubgeodesic ray $\varphi\_i(t)$ に沿って

$$
\lim\_{t\to\infty}\frac{\mathcal M\_{\mathrm{ccscK}}(\varphi(t))}{t}
=\mathcal M^{\mathrm{NA}}(\mathcal X\_0,\mathcal A\_0)
+\frac{S}{V\_0(n+1)!}(\mathcal A\_0^{n+1})
-\sum\_{i=1}^m\frac{(\mathcal A\_i^{n+1})}{V\_i(n+1)!}
+\frac1{V\_0n!}\sum\_{i=1}^m(\mathcal A\_i\cdot\mathcal A\_0^n)
$$

が成り立つ。混合交点数は全試験配置を支配する共通の滑らかなモデルへの引戻しで計算する。$\mathcal M^{\mathrm{NA}}$ は通常の非Archimedes Mabuchi汎関数であり、中心ファイバーが非被約ならその補正を含む。

### 代数的傾き公式（Theorem 2）

豊富な直線束 $L\_i$ の滑らかなコンパクト化試験配置について、中心ファイバー近傍の滑らかな正計量が誘導するrayに同じ公式が成立する。上式の $\mathcal A\_i$ を $\mathcal L\_i$ に置き換えたものが正確な交点表示である。コホモロジー的結果と代数的退化の記述をつなぐ定理である。

### Fano設定での二つのエネルギー（Theorem 3・Corollary 4）

$c\_1(X)=\sum\_i[\omega\_i]$ のもと、$\operatorname{Ric}(\Omega)=\sum\_i\omega\_i$ を満たす基準形式を取る。$\mu\_0$ を $\omega\_{0,\varphi\_0}^n$ の確率正規化、$\mu\_\Sigma$ を $(\sum\_i\omega\_{i,\varphi\_i})^n$ の確率正規化、$\nu\_\varphi$ を $e^{-\sum\_i\varphi\_i}\Omega^n$ の確率正規化とすると、定理3は

$$
\mathcal M\_{\mathrm{ccscK}}=N\_{\mathrm{cKE}}+\operatorname{Ent}(\mu\_0,\nu\_\varphi)-R,
\qquad
\mathcal M'=N\_{\mathrm{cKE}}+\operatorname{Ent}(\mu\_\Sigma,\nu\_\varphi)-R'
$$

を与える。$R,R'$ は基準計量での対応する相対entropyである。連成Kähler–Einstein計量が存在すれば両汎関数は下に有界となる。ただし $\mathcal M'$ の凸性と、その臨界点方程式と連成KE方程式の関係は未解明と明記されている。

### 解による最小化（Theorem 5）

類の組に連成cscK解 $\omega\_i'$ が存在すれば、任意の滑らかな同じ類の組 $\omega\_i''$ に対して

$$
\mathcal M\_{\mathrm{ccscK}}((\omega\_i''),(\omega\_i))
\ge\mathcal M\_{\mathrm{ccscK}}((\omega\_i'),(\omega\_i))
$$

となる。したがって定理1の傾き公式の右辺は全ての指定された試験配置に対して非負である。これは抽象的な有界性を具体的な交点不等式へ変える。

### 存在から半安定性へ（Theorem 7）

Definition 6では定理1の右辺の $\mathcal M^{\mathrm{NA}}$ を通常の $\operatorname{DF}$ に置き換えた交点式を $\operatorname{DF}\_c$ と定義する。連成cscK計量の存在は

$$
\operatorname{DF}\_c((\mathcal X\_i,\mathcal A\_i)\_{i=0}^m)\ge0
$$

を全ての相対Kähler試験配置に対して含意する。また豊富な $L\_i$ に対する連成代数的K半安定性は、類 $c\_1(L\_i)$ に対する連成K半安定性と同値である。論文で定義する不変量と、それ以前の文献の連成不変量を混同しないことが要点である。

### 有限エネルギー空間への拡張（Theorem 8）

$\mathcal M\_{\mathrm{ccscK}}$ は

$$
\mathcal M\_{\mathrm{ccscK}}:\prod\_{i=0}^m\mathcal E^1(X,\omega\_i)
\longrightarrow\mathbb R\cup\lbrace +\infty\rbrace
$$

へ拡張される。これは各 $d\_{1,\omega\_i}$ の積位相について最大の下半連続拡張であり、有限エネルギー測地線の任意の組に沿って凸である。滑らかな計量だけでなく、弱い極限を扱うための枠組みを与える。

## 証明の見取り図

まず多変数エネルギー、すなわち解析的Deligne pairingを用いてChen–Tian型公式を導く。各項の退化に沿う漸近を既存の解析・交点理論と照合して傾き公式を得る。弱測地線上の凸性から解による最小化を導き、その無限遠の傾きから半安定性を得る。Fano設定ではentropyを介して二つのエネルギーを比較する。有限エネルギーへの拡張は、この系列の後続研究の準備として位置付けられている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34145)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34145v1) — Section 1, pp. 2–6（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorems 1, 2, 3, 5, 7, 8; Corollary 4; Definition 6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34145v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
