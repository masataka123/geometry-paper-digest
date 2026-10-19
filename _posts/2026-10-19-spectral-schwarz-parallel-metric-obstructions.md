---
layout: paper
title: Spectral Schwarz Lemmas and Parallel Obstructions to Metric Comparison
title_ja: スペクトル型Schwarz補題とHermitian計量比較の平行な障害
authors: Xu Pang, Yao Sha, Ren Xin-An
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: In this paper, we characterize when comparison of contracted Chern curvatures implies comparison of Hermitian bundle metrics with the same constant on compact Hermitian bases. If the curvature contraction of the reference metric is semipositive, this implication holds for every Hermitian metric if and only if the kernel of this contraction contains no nonzero subbundle parallel with respect to the Chern connection of the reference metric. The equality terms of a $C^2$ spectral truncation identify the parallel summand on which comparison can fail, without regularity assumptions on the curvature kernel. We also establish a sharp operator estimate, with a constant independent of the bundle ranks, for holomorphic bundle maps on complete K\"ahler bases under curvature bounds and bounded base-map energy density. Smooth Schatten moments give global control without a separate boundedness assumption on the bundle map. Finally, we obtain rank bounds and conditions for vanishing on
  compact Hermitian bases from directional curvature traces over fiber subspaces. For higher-dimensional subspaces, these conditions allow mixed signs on individual fiber lines.
topic: differential-geometry
tags:
- curvature
- vector-bundles-sheaves
- positivity
arxiv_id: 2610.23011v1
arxiv_url: https://arxiv.org/abs/2610.23011
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: Hermitian束のChern曲率の縮約の比較から同じ定数で計量を比較できる条件を、曲率核内の平行部分束によって特徴づける。半正値の場合の障害を正確に記述し、完備Kähler基底上で束の階数に依存しない作用素評価と、曲率traceによる階数制約を与える。
abstract_en: ''
summary_en: The paper identifies the precise obstruction to recovering metric inequalities from semipositive contracted curvature. Excess relative eigenvalues form a parallel holomorphic summand in the reference curvature kernel. For bundle maps on complete Kähler bases, moment estimates yield an operator bound without a rank factor or a separate boundedness assumption on the map. Directional traces on higher-dimensional fibre subspaces also produce rank restrictions even when individual fibre directions have mixed curvature signs.
abstract_ja: 著者らは、基準計量の曲率縮約が半正値のとき、計量比較に失敗する過剰固有空間が平行な正則直和因子をなすことを示す。この因子は曲率の核に含まれ、相対計量もその上で平行となる。さらに、完備Kähler多様体上の正則束写像には鋭い作用素評価を、コンパクトHermitian基底上では多次元ファイバー部分空間の曲率traceから消滅・階数評価を得る。
abstract_source_url: https://arxiv.org/abs/2610.23011
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.23011v1](https://arxiv.org/abs/2610.23011)
- **著者:** Xu Pang, Yao Sha, Ren Xin-An
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Schwarz補題は曲率の比較から正則写像の伸びを制御する原理である。束の二つの計量を比較する場合、相対自己準同型の最大固有値を抑えることと、固有値の総和を抑えることは異なる。本論文はこのスペクトルの違いを利用する。

基準計量のChern曲率縮約が正値なら既知の計量比較が使えるが、半正値では核に沿う計量の拡大が障害になり得る。著者らは、比較に失敗する方向が必ず平行な正則直和因子をなすことを示し、核の階数が一定であるという仮定なしに障害を特定する。

さらに完備Kähler基底上で、正則束写像の作用素ノルムを階数に依存しない定数で評価する。多次元のファイバー部分空間に沿う曲率traceによる階数制約も得られ、各直線方向の曲率に符号が混在する状況まで扱う。

## 背景と問題設定

正則束$E\to X$のHermitian計量$G,H$と、基底のHermitian計量$b$に対し、

$$
S\_b(G)=\operatorname{tr}\_{\omega\_b}R\_G,\qquad S\_b(H)=\operatorname{tr}\_{\omega\_b}R\_H
$$

を考える。各曲率のファイバー添字はそれぞれ自身の計量で下げ、これらを$E$上のHermitian形式として比較する。$A=G^{-1}H$の最大固有値が$\kappa$以下であることは$H\leq\kappa G$と同値である。

## 主結果

### 半正値比較の障害（Theorem 1.1）

コンパクト連結Hermitian基底上で

$$
S\_b(G)\geq0,\qquad S\_b(H)\leq\kappa S\_b(G),\qquad\kappa>0
$$

とする。$A$の固有値が$\kappa$を超える固有空間の和$E\_+$は滑らかな正則部分束となり、$E=E\_+\oplus E\_+^{\perp\_G}$は$G$のChern接続で保存される。さらに$S\_b(G)$は$E\_+$上で零で、$A|\_{E\_+}$は平行である。従って過剰固有値は定数となる。

特に曲率核に非零の$G$-平行部分束がなければ$H\leq\kappa G$である。固定した$G,\kappa$について、曲率条件を満たす全ての$H$に計量比較が成り立つことと、この平行部分束が存在しないことは同値となる。至る所退化していても、核が平行でなければ比較が成立する場合がある。

### 階数によらない作用素評価（Theorem 1.2）

$(M,g)$をRicci曲率が下に有界な完備Kähler多様体、$(N,h)$をHermitian多様体とする。正則写像$f:M\to N$を覆う正則束写像$\varphi:(E\_1,G)\to(E\_2,H)$について

$$
E\_f=\sup\_M\operatorname{tr}\_{\omega\_g}f^*\omega\_h<\infty
$$

と仮定する。$K\_1,K\_2>0$に対し

$$
\operatorname{tr}\_{\omega\_g}R\_{E\_1}\geq K\_1\varphi^*H,\qquad
R\_{E\_2}(w,\overline w,\eta,\overline\eta)\leq K\_2|w|\_h^2|\eta|\_H^2
$$

が全ての対象方向で成り立つなら、

$$
\varphi^*H\leq\frac{K\_2E\_f}{K\_1}G
$$

を得る。定数に束の階数が入らず、$\varphi$自身の有界性を別途仮定しない。trace評価から最大固有値を抑える際の階数因子を除く点が強みである。

### ファイバーtraceによる階数制約（Theorem 1.3）

$M$をコンパクトHermitian基底とし、$1\leq l\leq\min(r\_1,r\_2)$を固定する。全ての点とファイバー内の$l$次元部分空間$\sigma\subset E\_1$、$\sigma'\subset E\_2$について、同じ非零基底方向$v$が存在し、

$$
R\_{E\_1}(v;\sigma)\geq0,\qquad R\_{E\_2}(df(v);\sigma')\leq0
$$

を満たし、少なくとも一方が狭義であると仮定する。ここで$R(v;\sigma)$は$\sigma$のunitary基底に関するファイバーtraceである。このとき

$$
\bigwedge^l\varphi=0,\qquad \operatorname{rank}\_{\mathbb C}\varphi\_x<l
$$

が全ての点で成立する。$l>1$では写像自体の消滅ではなく階数制約である。また二つの曲率条件を異なる方向で満たすだけでは仮定を満たさない。

## 証明の見取り図

半正値比較には$F=\operatorname{tr}(A-\kappa I)\_+^3$を使う。三乗の正部分は閾値で$C^2$であり、固有値交差があってもtraceは$C^2$となる。スペクトルBochner公式から$\Delta\_bF\geq0$を得て、コンパクト性と等号条件によって過剰部分の平行性を導く。

完備基底では$U\_p=\operatorname{tr}(A^p)$という滑らかなSchatten momentを使い、非線形Omori–Yau原理から$\sup U\_p\leq q(K\_2E\_f/K\_1)^p$を得る。$p$乗根を取り$p\to\infty$とすると$q^{1/p}\to1$となり階数因子が消える。最後の階数定理には、Niの対数的な局所スペクトル支持関数を用いる。

## 原論文との対応

- **Abstractページ:** [Spectral Schwarz Lemmas and Parallel Obstructions to Metric Comparison](https://arxiv.org/abs/2610.23011)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.23011v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.1–1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.23011v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
