---
layout: paper
title: One complex metric and geometric adelic nefness
title_ja: 一つの複素計量から幾何学的アデールnef性へ
authors: Kaicheng Dong
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.NT
arxiv_abstract: We prove that an arithmetic adelic line bundle on a smooth quasi-projective variety over a number field has nef geometric part if its prescribed continuous metric at one complex embedding has semipositive first Chern current. The proof constructs semiample approximations to every positive rational ample perturbation by boundary extension, multiplier ideals, and Nadel vanishing, followed by specialization and Galois descent. This gives geometric nefness of Gao--Zhang's canonical Gross--Schoen adelic line bundle.
topic: algebraic-geometry
tags:
- positivity
- multiplier-ideals-extension
- chern-classes
arxiv_id: 2611.09319v1
arxiv_url: https://arxiv.org/abs/2611.09319
arxiv_submitted: '2026-11-06'
arxiv_updated: '2026-11-06'
summary: 準射影多様体上で、境界への延長と整合する半正値な複素計量が、コンパクト化された直線束のnef性を保証することを示す。数体上では一つの複素埋め込みでの条件から幾何学的nef性を導き、Gao–ZhangのGross–Schoen直線束に応用する。
abstract_en: ''
summary_en: The central issue is whether positivity at a complex place controls a prescribed extension across the boundary of a nonproper variety. Dong establishes such a criterion when the metric is compatible with the same model data that define the compactified line bundle. The proof produces semiample approximations and then descends the geometric conclusion to a number field. Its Gross–Schoen application concerns geometric nefness, rather than all the arithmetic positivity questions associated with these bundles.
abstract_ja: 滑らかな準射影多様体上のコンパクト化された有理直線束について、その境界近似と整合する連続Hermite計量の第一Chernカレントが半正値なら、直線束はnefになることを示す。境界への延長、乗数イデアルとNadel消滅を用いて半豊富な近似を構成し、特殊化とGalois降下により数体上へ移す。算術アデール直線束では指定された複素計量が必要な整合条件を満たすため、一つの複素埋め込みでの半正値性から幾何学的部分のnef性が従う。Gao–Zhangの標準Gross–Schoenアデール直線束がその応用となる。
abstract_source_url: https://arxiv.org/abs/2611.09319
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.09319v1](https://arxiv.org/abs/2611.09319)
- **著者:** Kaicheng Dong
- **初回投稿日:** 2026-11-06
- **最終更新日:** 2026-11-06
- **主分類・副分類:** math.AG（主分類）; math.NT
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影多様体では、連続な半正値Hermite計量を持つ直線束はnefである。準射影多様体で同じ問題を考えると、開部分の計量だけでなく、境界でどの延長を指定しているかが本質的になる。本論文はこの境界の情報を幾何学的アデール直線束として保持する。

中心となる条件は、直線束のモデル近似と計量の近似を同じ同型で比較できることである。この意味で整合する計量の曲率が半正値なら、指定されたコンパクト化自体がnefになる。開部分上で独立に半正値計量を選べばよい、という主張ではない。

数体上では一つの複素埋め込みでこの条件を確認すれば足りる。Gao–ZhangのGross–Schoen直線束に適用して、その幾何学的部分のnef性を得る。Introductionはこれを算術的nef性やbignessの問題と明確に区別している。

## 背景と問題設定

$U$を滑らかな複素準射影多様体とし、滑らかな射影コンパクト化$X\_0$と境界を支える有効Cartier因子$D\_0$を固定する。コンパクト化された有理直線束$L$は、$U$上での同型を指定した射影モデル上の有理直線束の、境界ノルムに関するCauchy列で表される。

$L$上のcompactified metricとは、$L\_U$上の連続Hermite計量$h$であって、任意の有理数$t>0$に対しモデル$P\_t$と計量$h\_t$を同じ同型$\alpha\_t:L\_U\simeq P\_t|\_U$で比較して

$$
\lVert P\_t-L\rVert\_{D\_0}\leq t,\qquad
\left|\varphi\_{\alpha\_t^{\ast}h\_t,e}-\varphi\_{h,e}\right|\leq t g\_0
$$

とできるものである。ここで$g\_0\geq1$は境界Green関数、$\varphi\_{h,e}=-\log\lVert e\rVert\_h$である。射影的な場合には境界条件を取り除く。

## 主結果

### 主定理1：複素数体上のnef性（Theorem 1.1）

$L$が上記のcompactified metric $h$を持ち、

$$
c\_1(L\_U,h)\geq0
$$

がカレントの意味で成り立てば、$L$はnefである。対象は正次元の滑らかな既約複素準射影多様体である。境界と整合した解析的半正値性を、指定された幾何学的アデール延長の正値性に結び付ける。

### 主定理2：数体への降下（Theorem 1.2）

数体$K$上の正次元の滑らかな幾何学的整準射影多様体$U$とコンパクト化された有理直線束$L$について、一つの埋め込み$\sigma:K\hookrightarrow\mathbb C$で$L\_\sigma$が半正値なcompactified metricを持てば、$L$はnefである。特に算術アデール直線束の指定された連続複素計量が一か所で半正値なら、その幾何学的部分がnefになる。

### 主定理3：Gross–Schoen直線束（Theorem 1.3）

$g\geq3$とし、$(2g-2)\xi=\omega\_C$を満たす種数$g$の曲線と次数1の類の組$(C,\xi)$をパラメータ化する、滑らかな幾何学的整fine-level多様体$M/K$を考える。普遍曲線、Jacobian、Abel–Jacobi写像、標準計量付きPoincaré束を用い、原論文の正規化で

$$
Q=(i\_\xi,i\_\xi)^{\ast}P,\qquad
G\_g=\langle Q,Q,Q\rangle\_{C\times\_M C/M}
$$

と置く。この算術アデール有理直線束の幾何学的部分$G\_g^{\mathrm{geom}}$はnefである。既知の曲率式$c\_1(G\_{g,\sigma})=\beta\_{\mathrm{GS}}\geq0$をTheorem 1.2へ入れる応用である。

## 証明の見取り図

まず境界の小さい補正を加えて半正値計量を延長し、その重みの下界から乗数イデアルの消滅次数を境界因子で評価する。固定した豊富な摂動を加え、Nadel消滅とCastelnuovo–Mumford正則性で大域生成を得る。乗数イデアルを主イデアル化すると半豊富な有理直線束が得られる。

Remark 1.4で明記される到達点は、任意の有理数$\varepsilon>0$と$\delta>0$に対し、モデル上の半豊富な$N$を

$$
N|\_U\simeq L\_U+\varepsilon A|\_U,\qquad
\lVert N-(L+\varepsilon A)\rVert\_{D\_0}<\delta
$$

となるように選べることである。境界誤差を0へ送り、次に豊富な摂動を小さくしてnef性を得る。数体の場合には生成切断と境界の比較写像を有限拡大へ特殊化し、Galois共役のテンソル積を用いて降下する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.09319)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.09319v1) — Section 1, pp. 2–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3; Remark 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.09319v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
