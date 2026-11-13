---
layout: paper
title: A Hadamard Formula for Equilibrium Envelopes under Parallel Deformation
title_ja: 平行移動する領域の平衡包絡とHadamard変分公式
authors: Ziyu Li
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AP
- math.DG
arxiv_abstract: Let $(X,ω_0)$ be a compact Kähler manifold of complex dimension $n$, and let $U\Subset X$ have $C^{3,1}$ uniformly strongly pseudoconvex boundary. Consider the signed parallel family $U_t=\{ρ<t\}$, where $ρ$ is a defining function agreeing near $\partial U$ with the signed distance, negative in $U$. Let $u_t$ be the equilibrium envelope with zero obstacle on $X\setminus U_t$, and write $Σ_t=\partial U_t$, with outward unit normal $ν_t$. We prove that the normalized Monge--Ampère energy $e(t)=E_{ω_0}(u_t)$ belongs to $C^{1,1/2}([-τ,τ])$ for some $τ>0$ and satisfies the Hadamard formula $$ e'(t)=\frac{1}{n+1}\int_{Σ_t}\left(-\partial_{ν_t}u_t\right)^2 dσ_{ρ,t}^{\mathrm{tot}}, |t|<τ. $$ Here $dσ_{ρ,t}^{\mathrm{tot}}$ is the interior outward Anzellotti trace of $$ \frac{1}{V} d^cρ\wedge \sum_{p=0}^{n-1}(p+1) ω_{u_t}^{p}\wedgeω_0^{n-1-p}, V=\int_Xω_0^n, ω_{u_t}=ω_0+dd^c u_t. $$ This measure is positive and uniformly comparable to the induced surface measure. The proof combines
  uniform $C^{1,1}$ estimates up to the boundary from the interior with $1/2$-Hölder stability of the normal derivatives under the normal-flow identifications. We identify the boundary part of the normalized Monge--Ampère measure with the negative outward trace of a divergence-measure flux current. The one-sided weak-* limits of the mixed Bedford--Taylor boundary measures yield the weighted total flux appearing in the variation formula.
topic: several-complex-variables
tags:
- pluripotential-theory
- monge-ampere-equations
arxiv_id: 2607.17187v4
arxiv_url: https://arxiv.org/abs/2607.17187
arxiv_submitted: '2026-07-19'
arxiv_updated: '2026-11-09'
summary: コンパクトKähler多様体で強擬凸領域の境界を平行移動させ、対応する平衡包絡のMonge–Ampèreエネルギーの変化を調べる。境界の法線微分と弱いフラックス測度を用いたHadamard公式を示し、エネルギーの微分に1/2-Hölder連続性を与える。
abstract_en: ''
summary_en: The obstacle in this problem is fixed at zero, but the region where it is imposed moves. Li studies the resulting change in equilibrium energy on a compact Kähler manifold. Boundary regularity and weak normal traces make it possible to obtain a shape derivative despite the degeneracy of the Monge–Ampère equation. The relevant measure is a weighted mixed flux, rather than just the static boundary mass.
abstract_ja: 境界を動かしたときに、退化した複素Monge–Ampère方程式の平衡包絡から定まるエネルギーがどう変わるかを扱う。滑らかな解の通常の変分公式を直接使う代わりに、内部側の一様正則性と混合Monge–Ampère測度の片側境界極限を組み合わせる。結果として、法線微分の二乗と重み付き境界測度による変分公式が得られ、静的な境界質量と変分に現れる全フラックスの相違も明確になる。
abstract_source_url: https://arxiv.org/abs/2607.17187
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.17187v4](https://arxiv.org/abs/2607.17187)
- **著者:** Ziyu Li
- **初回投稿日:** 2026-07-19
- **最終更新日:** 2026-11-09
- **主分類・副分類:** math.CV（主分類）; math.AP, math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

平衡包絡は、与えられた制約の下で最大の多重劣調和関数を取る構成である。本論文ではコンパクトKähler多様体の領域の外側で関数を零以下に制限し、その領域の境界を平行移動したときに包絡のエネルギーがどう変わるかを調べる。

古典的なHadamard公式では、領域の変形に伴うエネルギーの微分が境界上の法線微分を用いて表される。しかし、ここでは包絡が退化した複素Monge–Ampère方程式を満たすため、滑らかな関数族の計算をそのまま適用できない。内部側からの正則性と、発散測度カレントの弱い境界トレースが必要になる。

著者は境界の $C^{3,1}$ 正則性と一様強擬凸性の下で、エネルギーが $C^{1,1/2}$ 級になり、その微分が法線微分の二乗の境界積分となることを示す。積分に現れる測度は混合積に重みを付けた全フラックスであり、高次元では静的なMonge–Ampère境界質量とは区別される。

## 背景と問題設定

$(X,\omega\_0)$ を複素 $n$ 次元のコンパクトKähler多様体とする。$U\Subset X$ の境界はコンパクトな $C^{3,1}$ 級一様強擬凸超曲面とする。定義関数 $\rho$ は境界近くで符号付き距離に一致し、$U$ 内で負とする。小さい $t$ に対し
$$
U\_t=\lbrace \rho<t\rbrace ,\quad \Sigma\_t=\partial U\_t,\quad
\nu\_t=\nabla\rho|\_{\Sigma\_t},\quad
\nu\_t\text{ は外向き単位法線},
$$
$$
u\_t=\sup\lbrace v\in\operatorname{PSH}(X,\omega\_0):v\leq0\text{ on }X\setminus U\_t\rbrace ^{\ast }
$$
と定める。上付きの星は上半連続正則化を表す。$u\_t=0$ は領域外で成り立ち、領域内では $\omega\_{u\_t}^n=0$ である。$\omega\_u=\omega\_0+dd^cu$、$d^c=\frac{i}{2}(\bar\partial-\partial)$、$V=\int\_X\omega\_0^n$ として
$$
E\_{\omega\_0}(u)=\frac{1}{(n+1)V}\sum\_{j=0}^{n}\int\_X u\thinspace \omega\_u^j\wedge\omega\_0^{n-j}
$$
を扱う。先行研究の重みを変える平衡エネルギーの変分に対し、本論文は制約集合を動かす問題である。

## 主結果

### 一様正則性と動く境界の安定性（Theorem A）

小さい $|t|$ に対して内部側の $C^{1,1}$ ノルムが一様に有界となり、
$$
-\omega\_0\leq dd^cu\_t\leq C\omega\_0,
\qquad \Vert u\_t-u\_s\Vert \_{L^\infty(X)}\leq C|t-s|
$$
が成り立つ。法線流による領域の同一視を $\Xi\_{s,t}$、境界上の制限を $\Psi\_{s,t}$ とすると、$0<\beta<1$ に対して
$$
\Vert u\_t\circ\Xi\_{s,t}-u\_s\Vert \_{C^{1,\beta}(U\_s)}\leq C\_\beta|t-s|^{(1-\beta)/2}.
$$
特に $q\_t=-\partial\_{\nu\_t}u\_t$ は
$$
\Vert q\_t\circ\Psi\_{s,t}-q\_s\Vert \_{C^0(\Sigma\_s)}\leq C|t-s|^{1/2}
$$
を満たす。この指数が最終的なエネルギー微分の正則性につながる。

### 境界質量と法線トレース（Theorem B）

$\mu\_0=V^{-1}\omega\_{u\_0}^n$ の境界への制限を $\mu\_0^{\mathrm{sing}}$ とする。内部側のBedford–Taylor積から
$$
T\_{u\_0}=\sum\_{p=0}^{n-1}\omega\_{u\_0}^{p}\wedge\omega\_0^{n-1-p},\qquad
J[u\_0]=V^{-1}d^cu\_0\wedge T\_{u\_0}
$$
を定める。$d\sigma\_\rho$ を $V^{-1}d^c\rho\wedge T\_{u\_0}$ の内部外向きAnzellottiトレースとすると、
$$
\mu\_0^{\mathrm{sing}}=-\operatorname{Tr}^{\mathrm{out}}\_{\partial U}J[u\_0]
=(-\partial\_{\nu\_0}u\_0)d\sigma\_\rho.
$$
多重ポテンシャル論の境界質量と幾何学的測度論のフラックスを同定する式である。

### 混合トレースと全フラックス（Theorem C）

混合測度 $V^{-1}\omega\_{u\_\varepsilon}^j\wedge\omega\_{u\_0}^{n-j}$ の境界への制限は、$\varepsilon\downarrow0$ の片側弱極限を持つ。$0\leq j\leq n-1$ にわたるその和には
$$
B\_t^{\mathrm{tot}}=\sum\_{p=0}^{n-1}(p+1)\omega\_{u\_t}^{p}\wedge\omega\_0^{n-1-p},\qquad
d\sigma\_{\rho,t}^{\mathrm{tot}}=\operatorname{Tr}^{\mathrm{out}}\_{\Sigma\_t}
\bigl(V^{-1}d^c\rho\wedge B\_t^{\mathrm{tot}}\bigr)
$$
が現れる。$t=0$ では極限の和が $(-\partial\_{\nu\_0}u\_0)d\sigma\_{\rho,0}^{\mathrm{tot}}$ に一致する。この測度は正で、誘導される表面測度と一様に比較可能である。重み $p+1$ を落として静的な測度と同一視してはいけない。

### Hadamard公式（Theorem D）

ある $\tau>0$ について $e(t)=E\_{\omega\_0}(u\_t)$ は $[-\tau,\tau]$ 上で $C^{1,1/2}$ 級となり、
$$
\frac{d}{dt}E\_{\omega\_0}(u\_t)=\frac{1}{n+1}\int\_{\Sigma\_t}
(-\partial\_{\nu\_t}u\_t)^2\thinspace d\sigma\_{\rho,t}^{\mathrm{tot}},\qquad |t|<\tau
$$
が成り立つ。端点では対応する片側公式を持つ。これは指定した平行移動族についての定理であり、任意の境界変形にそのまま拡張した主張ではない。

## 証明の見取り図

正の密度を持つDirichlet近似から内部側の一様評価を得て、動く領域を法線流で比較する。次に弱い法線トレースを使って境界質量を同定し、混合測度の片側極限を制御する。エネルギーの正確な有限差分と境界展開を組み合わせることで係数 $1/(n+1)$ が現れ、法線微分の1/2-Hölder安定性が微分の正則性を与える。Introduction末尾では、$\mathbb P^1$ と高次元トーリック模型による検算も予告される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2607.17187)
- **Introduction:** [PDF](https://arxiv.org/pdf/2607.17187v4) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A–D
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2607.17187v4
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
