---
layout: paper
title: Classification of Smooth Minimal Kähler Fourfolds Without Effective Divisors and Surfaces
title_ja: 因子と曲面を持たないコンパクトKähler四次元多様体の分類
authors: Pisya Vikash
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We prove the following two statements: (1) If $X$ is a compact K\"ahler fourfold with pseudo-effective canonical bundle and no subvarieties of codimension one or two, then $K_X$ is a torsion line bundle; (2) If $X$ is a compact K\"ahler fourfold with no subvarieties of codimension one or two, then $X$ is not uniruled. Using the Beauville-Bogomolov decomposition and a characterization of Uniruled manifolds by Wenhao Ou, we get that if $X$ is a compact K\"ahler fourfold with no subvarieties of codimension one or two, then either $X$ is a torus or an irreducible holomorphic symplectic manifold.'
topic: algebraic-geometry
tags:
- hyperkahler-geometry
- positivity
- vector-bundles-sheaves
- chern-classes
- hermite-einstein-metrics
arxiv_id: 2607.04536v2
arxiv_url: https://arxiv.org/abs/2607.04536
arxiv_submitted: '2026-07-05'
arxiv_updated: '2026-10-23'
summary: 因子と曲面を含まない滑らかなコンパクトKähler四次元多様体が、複素トーラスまたは既約正則シンプレクティック多様体であることを示す。標準束の擬有効性からtorsion性を導く定理と、非単線織性の定理を組み合わせて分類する。曲線の存在は排除しない。
abstract_en: ''
summary_en: The paper classifies compact Kähler fourfolds with no analytic subvarieties of codimension one or two. It first derives torsion of the canonical bundle under pseudo-effectivity, then proves that the fourfold cannot be uniruled. These statements lead to a torus or irreducible holomorphic symplectic classification using the decomposition theorem and a cited criterion for uniruledness. The argument uses holomorphic forms, iterated extension classes and stability of bundles; curves are allowed by the hypotheses.
abstract_ja: 余次元1および2の解析的部分多様体を持たないコンパクトKähler四次元多様体について、標準束が擬有効ならtorsionであることと、そもそも単線織でないことを証明する。引用されるOuの非単線織性と標準束の擬有効性の判定、およびBeauville–Bogomolov分解を用いて、複素トーラスまたは既約正則シンプレクティック多様体という分類を得る。部分多様体を一切持たない場合より広く、曲線を持つ例も対象に含む。
abstract_source_url: https://arxiv.org/abs/2607.04536
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.04536v2](https://arxiv.org/abs/2607.04536)
- **著者:** Pisya Vikash
- **初回投稿日:** 2026-07-05
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体の分類では、標準束の正値性と部分多様体の存在が重要な役割を果たす。本論文は複素次元4で、因子と曲面が存在しないという強い幾何的条件の下で分類を行う。曲線まで排除しているわけではない。

最初の主定理は、標準束が擬有効なら何らかの正のテンソル冪が自明になることを示す。次の主定理は同じ部分多様体の不在条件から非単線織性を導く。引用される非単線織性の判定により擬有効性を得て、両者をつなぐ。

最終的に、対象は複素トーラスまたは既約正則シンプレクティック四次元多様体に限られる。一般のKähler四次元多様体のMMPや豊富性をそのまま仮定せず、正則微分形式、拡大類、束の安定性を使って特殊な幾何的状況を扱う点が中心となる。

## 背景と問題設定

対象 $X$ は滑らかなコンパクトKähler四次元多様体で、余次元1または2の既約な解析的部分多様体を持たない。既約正則シンプレクティックとは、単連結で $H^{2,0}(X)=\mathbb C\sigma$、かつ $\sigma$ が非退化な正則2形式であることをいう。

Introductionは、非常に一般の点を通る正次元の真部分多様体を持たない「単純」Kähler多様体に関する予想と関連づける。ただし、その一般予想を解決したと述べているわけではない。また、因子がないことから曲面がないことは従わず、Picard群が自明な二つのK3曲面の積が両条件の違いを示す。

## 主結果

### 擬有効な標準束のtorsion性（Theorem 3）

$X$ が上の部分多様体不在条件を満たし、さらに $K\_X$ が擬有効なら、

$$
K\_X^{\otimes m}\cong\mathcal O\_X\qquad\text{となる整数 }m>0\text{ が存在する}
$$

という結論を得る。単に $c\_1(K\_X)$ が零になるだけでなく、正則直線束としてtorsionとなる。因子の不在は本質的であり、Introductionは三次元トーラスと種数2の曲線の積では標準束が擬有効でもtorsionにならないことを説明する。

### 非単線織性（Theorem 4）

余次元1と2の解析的部分多様体を持たない滑らかなコンパクトKähler四次元多様体は単線織でない。この定理には標準束の擬有効性を仮定しない。著者はOuの定理として、コンパクトKähler多様体が単線織であることと標準束が擬有効でないこととの同値性を引用し、Theorem 3へ接続する。

### 二つの型への分類と変形への帰結（Corollaries 13, 14）

Corollary 14は、因子と曲面を持たない $X$ が複素トーラスまたは既約正則シンプレクティック多様体に双正則であると結論する。Corollary 13では、正次元の真解析的部分多様体を一切持たないKähler四次元多様体に変形同値な $X$ についても同じ二つの型を得る。

Introductionには、曲線を持つが因子も曲面も持たないトーラスの構成も説明される。一方、単純な三次元トーラス上の正則 $\mathbb P^1$-束は必ず有効因子を持つというProposition 15により、射影直線束による別の型の構成は排除される。

## 証明の見取り図

擬有効性からnef性への段階では、負の標準次数を持つ有理曲線があれば、それを動かす族と解析的特異性を持つKählerカレントとの関係から、部分多様体不在の仮定に反することを示す。その後、不正則数は $q(X)=0$ または $4$ に限られるとする。

$q(X)=0$ の場合、Euler標数、Miyaoka–Yau不等式、正則形式を用いて場合を分ける。正則形式から

$$
0\longrightarrow K\_X^{-1}\longrightarrow E\longrightarrow\mathcal I\_Z\otimes K\_X\longrightarrow0
$$

という非分裂拡大を作り、Serre双対性とHard Lefschetzを介して拡大類の構成を反復することが新たな要点として説明される。曲面を持たない仮定は、この拡大類を所要のコホモロジー類へ移す場面で働く。

非単線織性の議論では、単線織性から想定されるトーラス上の射影直線束を有限エタール底変換で $\mathbb P(E)$ として扱う。階数1の部分層の不在から束の安定性、さらに第2Chern類の消滅を導き、Hermite–Einstein理論につなげて矛盾を得る。ここではIntroductionの方針のみを記し、各補題の証明全体は検証していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2607.04536)
- **Introduction:** [PDF](https://arxiv.org/pdf/2607.04536v2) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 3, 4、Corollaries 13, 14、Proposition 15（Theorem 12は引用結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2607.04536v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
