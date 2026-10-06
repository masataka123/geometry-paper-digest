---
layout: paper
title: Convergence of Generalized K\"ahler--Ricci Flow on Toric Fano Manifolds
title_ja: トーリックFano多様体上の一般化Kähler–Ricci流の収束
authors: Liding Huang, Xiaohua Zhu
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We first define an extended Mabuchi functional for a class of generalized K\"ahler metrics of symplectic type on a toric Fano manifold $(M,J,\mathbb{T})$, and prove it is proper. Then by showing the monotonicity of functional along the normalized generalized K\"ahler-Ricci flow for any initial $\mathbb{T}$-invariant generalized K\"ahler metric with its symplectic form in $2\pi c_1(M,J)$, we prove that the flow converges to a K\"ahler-Ricci soliton. The result confirms a conjecture of Apostolov-Streets-Ustinovskiy.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- fano-varieties
- toric-geometry
- kahler-einstein-metrics
arxiv_id: 2610.05201v1
arxiv_url: https://arxiv.org/abs/2610.05201
arxiv_submitted: '2026-10-04'
arxiv_updated: '2026-10-04'
summary: |-
  トーリックFano多様体上で、反標準類のsymplectic形式を持つトーラス不変な一般化Kähler計量から出発する正規化一般化Kähler–Ricci流を調べる。複素トーラスの作用で引き戻すとKähler–Ricciソリトンへ滑らかに収束し、Futaki不変量が消える場合には引き戻しなしでKähler–Einstein計量へ指数収束する。
abstract_en: ''
summary_en: |-
  The paper studies whether a non-Kähler generalization of Ricci flow returns to a canonical Kähler geometry. Toric symmetry converts the evolution into an equation on a moment polytope. An extension of the Mabuchi functional and a smoothing theorem provide the compactness needed to prove convergence. The result also specifies when the limiting geometry is Einstein and no moving holomorphic gauge is required.
abstract_ja: |-
  トーリックFano多様体上のsymplectic型一般化Kähler計量に対してMabuchi汎関数を拡張し、そのpropernessを示す。初期symplectic形式の類が $2\pi c_1(M,J)$ である任意のトーラス不変計量から出発する正規化一般化Kähler–Ricci流について、この汎関数の単調性を使ってKähler–Ricciソリトンへの収束を証明する。これによりApostolov–Streets–Ustinovskiyの予想を解決する。
abstract_source_url: https://arxiv.org/abs/2610.05201
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05201v1](https://arxiv.org/abs/2610.05201)
- **著者:** Liding Huang, Xiaohua Zhu
- **初回投稿日:** 2026-10-04
- **最終更新日:** 2026-10-04
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般化Kähler幾何では、一つのRiemann計量に二つの複素構造とねじれのデータが組み合わされる。その流が長時間存在するとしても、ねじれが消えて通常のKähler幾何へ近付くかは別の問題である。本論文はトーリックFano多様体でこの収束を扱う。

主結果は、symplectic型でトーラス不変な初期計量について、symplectic形式が反標準類 $2\pi c_1(M,J)$ に属すれば、正規化一般化Kähler–Ricci流が複素トーラスの作用を除いてKähler–Ricciソリトンへ収束するというものである。計量だけでなく、第二の複素構造と二形式も同時に標準的な極限へ向かう。

方法の中心は、Mabuchi汎関数の拡張による弱いコンパクト性と、弱い初期値から正時間での滑らかさを得る評価の組合せである。Futaki不変量が消える場合には結論が強まり、動く自己同型による補正を使わずにKähler–Einstein計量へ指数収束する。

## 背景と問題設定

一般化Kähler構造のbi-Hermitian表示を $(g,I,J,b)$ とする。symplectic型では $I+J$ が可逆で、$J$ をtameするsymplectic形式 $F$ によって

<div>
$$
I=-F^{-1}J^*F,\qquad -FJ=g+b
$$
</div>

と記述される。トーリックFano多様体 $(M,J,\mathbb T)$ 上で、$[F]=2\pi c_1(M,J)$ を仮定する。

対応するDelzant多面体 $P$ 上では、symplecticポテンシャル $u_t$ の方程式は

<div>
$$
\dot u=\log\det(D^2u+\sqrt{-1}B_t)+2u-2x\cdot\nabla u,
\qquad B_t=e^{-2t}B_0
$$
</div>

となる。もう一つの変形パラメータも $A_t=e^{-2t}A_0$ と減衰する。先行研究で長時間存在は得られており、本論文の焦点は極限の同定と収束である。

## 主結果

### 主定理1：Kähler–Ricciソリトンへの滑らかな収束（Theorem 1.1）

上記の初期条件の下で、滑らかな族 $\gamma_t\in\mathbb T_{\mathbb C}$ とKähler–Ricciソリトン $\omega_{\mathrm{KRS}}$ が存在して、

<div>
$$
(\gamma_t^*\widetilde\omega_t,
\gamma_t^*\widetilde I_t,
\gamma_t^*\widetilde b_t)
\longrightarrow(\omega_{\mathrm{KRS}},J,0)
\qquad(t\to\infty)
$$
</div>

が $C^\infty$ で成り立つ。チルダは、原論文で指定される標準的な同変双正則写像によって複素構造 $J$ を固定した表示を表す。第二の複素構造が $J$ へ、二形式が0へ収束することまで含む。

Futaki不変量が消える場合には $\gamma_t=\mathrm{id}$ とでき、極限はKähler–Einstein計量である。この場合の収束は全ての $C^k$ ノルムで指数的である。

### 主定理2：有限エネルギー初期値の平滑化（Theorem 1.2）

$B_0\in\bigwedge^2\mathfrak t$ を固定する。正規化された滑らかなトーリックsymplecticポテンシャル $u_{0,j}\geq0$、$u_{0,j}(0)=0$ が $u_\infty$ へ $L^1(P)$ 収束し、Legendre変換による対応ポテンシャル $\varphi_0=u_\infty^*-\bar\varphi_0$ が $\mathcal E^1_{\mathbb T}$ に属すとする。

各 $(u_{0,j},0,B_0)$ が滑らかなsymplectic型一般化Kähler構造を定め、初期のbi-Hermitianデータが一様評価

<div>
$$
\sup_j\sup_M|b_{0,j}|_{g_{0,j}}^2\leq2Q\lt \infty
$$
</div>

を満たすと仮定する。このとき任意の $0<\varepsilon<T<\infty$ と $k\geq0$ について

<div>
$$
\|\varphi_j\|_{C^k([\varepsilon,T]\times M)}\leq C_{\varepsilon,T,k}
$$
</div>

が $j$ に依存しない定数で成り立ち、正時間では滑らかな解へ収束する。対応する $u(t)$ は $t\to0+$ で $u_\infty$ に $L^1(P)$ 収束する。

極限は上のような一様評価を満たす近似列の選び方に依存しない。一意性はこの近似極限のクラス内の主張であり、任意の弱解に対する無条件の一意性と読み替えない。

## 証明の見取り図

まず一般化Kähler計量に拡張したMabuchi汎関数を、通常の修正K-energyと比較してpropernessを得る。流に沿う単調性からsymplecticポテンシャルの $L^1$ 収束部分列を取り、対応するKählerポテンシャルの極限が有限エネルギークラスに入ることを示す。

次にTheorem 1.2の正時間評価で弱い収束を滑らかな収束へ高め、既知の安定性結果を適用して流全体の収束を得る。Introductionは、有限エネルギー初期値を持つ弱Kähler–Ricci流の研究からこの評価の方針が導かれたと説明する。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05201](https://arxiv.org/abs/2610.05201)
- **Introduction:** Section 1、pp. 1–3。
- **主要定理・式:** Theorems 1.1–1.2、式(1.2)–(1.4)。
- **論文構成:** p. 3。Section 3で汎関数、Sections 4–5で平滑化と収束を証明する。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
