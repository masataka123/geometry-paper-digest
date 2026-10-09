---
layout: paper
title: Explicit Ricci-flat Metrics on Kummer K3 Surfaces
title_ja: Kummer K3曲面のRicci平坦計量の収束する明示表示
authors: Jixiang Fu, Yunyang Xiao, Shing-Tung Yau
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We give a convergent explicit representation of the Ricci-flat K\"ahler metrics supplied by the Calabi--Yau theorem in a one-parameter family of classes on a fixed Kummer K3 surface. An explicit radial background has normalized Monge--Amp\`ere residual \(O(a^4)\). Its scalar Green operator \(G_a\) is represented by periodic Ewald kernels, separated radial kernels, finite-dimensional Schur complements, and convergent Neumann series. The coefficients are defined by \(U_{a,1}=-G_af_a\) and \(U_{a,n}=G_a\sum_{j=1}^{n-1}Q_a(U_{a,j},U_{a,n-j})\), where \(Q_a\) is the polarized quadratic Monge--Amp\`ere term. A Green estimate of order \(a^{-1}\) gives a first correction of order \(a^3\) and a convergence parameter of order \(a^2\). A Catalan majorant proves absolute convergence on the entire smooth surface for every sufficiently small fixed \(a\). The sum defines a positive form solving the volume equation; comparison identifies the sum with the smooth normalized Calabi--Yau potential.
  We also record sufficient analytic conditions for the same recursion on collapsing elliptic K3 surfaces.
topic: differential-geometry
tags:
- calabi-yau-geometry
- kahler-einstein-metrics
- monge-ampere-equations
- hyperkahler-geometry
arxiv_id: 2610.11077v1
arxiv_url: https://arxiv.org/abs/2610.11077
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: 固定したKummer K3曲面の小パラメータ族のKähler類について、Calabi–Yau計量のポテンシャルを収束する再帰級数で表す。背景Green作用素とMonge–Ampère方程式の二次項を明示し、Catalan数による評価で例外曲線を含む曲面全体での収束を示す。
abstract_en: We give a convergent explicit representation of the Ricci-flat K\"ahler metrics supplied by the Calabi--Yau theorem in a one-parameter family of classes on a fixed Kummer K3 surface. An explicit radial background has normalized Monge--Amp\`ere residual \(O(a^4)\). Its scalar Green operator \(G_a\) is represented by periodic Ewald kernels, separated radial kernels, finite-dimensional Schur complements, and convergent Neumann series. The coefficients are defined by \(U_{a,1}=-G_af_a\) and \(U_{a,n}=G_a\sum_{j=1}^{n-1}Q_a(U_{a,j},U_{a,n-j})\), where \(Q_a\) is the polarized quadratic Monge--Amp\`ere term. A Green estimate of order \(a^{-1}\) gives a first correction of order \(a^3\) and a convergence parameter of order \(a^2\). A Catalan majorant proves absolute convergence on the entire smooth surface for every sufficiently small fixed \(a\). The sum defines a positive form solving the volume equation; comparison identifies the sum with the smooth normalized Calabi--Yau potential.
  We also record sufficient analytic conditions for the same recursion on collapsing elliptic K3 surfaces.
summary_en: ''
abstract_ja: 固定したKummer K3曲面上で、平坦な部分とEguchi–Hanson計量を補間する背景計量を作り、それを補正するRicci平坦計量を明示する研究である。背景のGreen作用素を核、境界の整合、有限次元の線形代数、収束するNeumann級数で表し、Monge–Ampère方程式の二次構造から各補正項を再帰的に定める。小さい固定パラメータごとに級数が曲面全体で絶対収束し、その和が既存のCalabi–Yau定理の正規化ポテンシャルと一致することを示す。楕円K3曲面への拡張に必要な条件も述べるが、その場合の大域的Green評価の証明までは行わない。
abstract_source_url: https://arxiv.org/abs/2610.11077
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** Explicit Ricci-flat Metrics on Kummer K3 Surfaces
- **著者:** Jixiang Fu, Yunyang Xiao, Shing-Tung Yau
- **arXiv:** [2610.11077v1](https://arxiv.org/abs/2610.11077)
- **初回投稿日 / 更新日:** 2026-10-08 / 2026-10-08
- **主分類:** math.DG
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)。著作権は原著者等の権利者に帰属する。

## 要約

Calabi–Yau定理はK3曲面の各Kähler類にRicci平坦計量が一意に存在することを保証するが、その存在だけでは計量を具体的に計算する表示は得られない。本論文は固定したKummer K3曲面の特定の小パラメータ族に対し、ポテンシャルの各項を再帰的に定める収束表示を与える。

背景計量は、トーラス商の平坦部分と16個の例外曲線付近のEguchi–Hanson計量を補間して作る。二次のMonge–Ampère項に同じGreen作用素を反復適用することで、補正の全次数を統一的に記述する。

本論文の「明示的」は有限個の初等関数による閉形式という意味ではなく、積分核、収束級数、有限次元線形代数による作用素の処方を意味する。収束は小さい固定パラメータごとに例外曲線を含む曲面全体で成立し、パラメータに依存しない係数を持つ通常の冪級数だとは主張しない。

## 背景と問題設定

<p>$T=\mathbb C^2/(\mathbb Z+\sqrt{-1}\mathbb Z)^2$ とし、$X\to T/\{\pm1\}$ を極小解消、$E_1,\ldots,E_{16}$ を例外曲線、$\kappa$ を平坦なorbifold Kähler類の引き戻しとする。正則2形式 $\Omega$ と $\mu=\frac14\Omega\wedge\overline\Omega$ を固定し、$\int_X\mu=1/2$ と正規化する。</p>

<div>
$$
\alpha_a=\kappa-\frac{\pi a^2}{2}\sum_{\nu=1}^{16}[E_\nu],
\qquad c_a=1-8\pi^2a^4,
\qquad \alpha_a\cdot E_\nu=\pi a^2.
$$
</div>

<p>背景形 $\omega_a^{\mathrm{mod}}\in\alpha_a$ に対し、$dV_a=(\omega_a^{\mathrm{mod}})^2/2$、$f_a=c_a\mu/dV_a-1$ と置く。$f_a$ は平均0で、スケールに適合したHölderノルムで $O(a^4)$ である。</p>

<p>平均0の関数上で $A_a=-\Lambda_{\omega_a^{\mathrm{mod}}}\sqrt{-1}\partial\bar\partial$、$G_a=A_a^{-1}$ とし、</p>

<div>
$$
Q_a(u,v)=\frac{\sqrt{-1}\partial\bar\partial u\wedge\sqrt{-1}\partial\bar\partial v}{(\omega_a^{\mathrm{mod}})^2}
$$
</div>

<p>と書く。複素次元2の体積方程式は正確に $-A_au+Q_a(u,u)=f_a$ となる。</p>

## 主結果

### 主定理1：Calabi–Yau計量の再帰表示（Theorem 1.1）

<p>ある $a_0>0$ が存在し、$0\lt a\lt a_0$ に対し次の平均0の補正項が絶対収束する級数をなす。</p>

<div>
$$
U_{a,1}=-G_af_a,\qquad
U_{a,n}=G_a\left(\sum_{j=1}^{n-1}Q_a(U_{a,j},U_{a,n-j})\right)\quad(n\ge2).
$$
</div>

<p>その和は正規化されたCalabi–Yauポテンシャル $v_a$ と一致し、</p>

<div>
$$
v_a=\sum_{n=1}^{\infty}U_{a,n},\qquad
\omega_{\mathrm{CY},a}=\omega_a^{\mathrm{mod}}+\sqrt{-1}\partial\bar\partial\sum_{n=1}^{\infty}U_{a,n}>0,
\qquad \frac{\omega_{\mathrm{CY},a}^2}{2}=c_a\mu.
$$
</div>

<p>収束空間は $X_a=C^{2,\alpha}(X,\mathbb R)/\mathbb R$ に、背景計量で規格化した複素Hessianのスケール付きHölderノルムを入れたものである。固定した $a$ では通常の $C^{2,\alpha}$ ノルムと定数を除いて同値になる。</p>

<p>$a,n$ に依存しない定数 $C_1,C_2>0$ により、</p>

<div>
$$
\|U_{a,n}\|_{X_a}\le\operatorname{Cat}_{n-1}C_1^nC_2^{n-1}a^{2n+1},
\qquad \operatorname{Cat}_m=\frac{1}{m+1}\binom{2m}{m},
\qquad \|v_a\|_{X_a}\le Ca^3
$$
</div>

<p>が成り立つ。形式的な展開ではなく、曲面全体で和が実際の計量を与える点が主要な結論である。</p>

### 明示性と適用範囲

Green作用素は、平坦な外部領域と16個のcapを境界で合わせ、周期的Fourier–Ewald核、動径核、有限次元Schur補行列、Neumann級数によって構成する。数値的な誤差保証には別途評価が必要であり、収束定理そのものと数値認証は区別される。

Introductionは、楕円K3曲面で同様の再帰を行う十分条件を記録する一方、そのGreen作用素の構成と大域評価は本論文で証明しないと明記する。Calabi–Yau 3次元多様体への拡張、正則円板の存在・数え上げ、SYZ鏡の特異な部分の完成も今後の課題である。

## 証明の見取り図

<p>背景作用素には $\|G_af\|_{X_a}\le Ca^{-1}\|f\|_{Y_a}$、二次項には $\|Q_a(u,v)\|_{Y_a}\le\frac12\|u\|_{X_a}\|v\|_{X_a}$ という評価を得る。したがって最初の補正は $O(a^3)$、非線形反復の収束を支配する量は $O(a^2)$ となる。</p>

<div>
$$
4\|G_af_a\|_{X_a}\,\|G_aQ_a\|_{\mathrm{bil}}\lt1
$$
</div>

<p>という十分条件からCatalan数による優級数で絶対収束を示す。収束する経路に沿って正値性を確保し、部分積分による比較で和をYauの定理のポテンシャルと同定する。Calabi–Yau定理の存在結論と、今回の具体的な再帰表示の収束証明は異なる役割を持つ。</p>

## 原論文との対応

- **Abstractページ:** [2610.11077](https://arxiv.org/abs/2610.11077)
- **PDF:** [2610.11077v1](https://arxiv.org/pdf/2610.11077v1)
- **Introduction:** Section 1, pp. 1–4
- **主要結果:** Theorem 1.1; equations (1.1)–(1.4)
- **確認バージョン:** 2610.11077v1
- **確認ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
