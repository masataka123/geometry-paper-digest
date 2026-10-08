---
layout: paper
title: The interpolation method for the complex Hessian equation on compact K\"ahler manifolds
title_ja: 曲率と振幅の条件から補間法で得る複素Hessian方程式の勾配評価
authors: Jiaogen Zhang, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: |-
  In current work, we delve into the study of complex Hessian equations on compact K\"ahler manifolds. By imposing a constraint on both the bisectional curvature and the oscillation of the solution, we demonstrate that the Laplacian estimate can be linearly controlled by its gradient estimate. Consequently, we are able to derive gradient estimate for the solution using a standard interpolation argument, without the need to employ the blow-up technique. As an application, we demonstrate that when the right-hand side of the complex Hessian equations approximate 1 in the $L^1$ norm, the desired gradient estimate is obtained.
topic: differential-geometry
tags:
- monge-ampere-equations
- curvature
- pluripotential-theory
arxiv_id: 2610.07852v1
arxiv_url: https://arxiv.org/abs/2610.07852v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  コンパクトKähler多様体上の複素Hessian方程式について、双正則断面曲率と解の振幅の積が小さい場合に、Laplacianを勾配に線形に依存する形で評価する。この改良により、blow-up法を使わず補間法で勾配と二階量の評価を閉じる。右辺がL¹で1に近い場合も扱う。
abstract_en: |-
  In current work, we delve into the study of complex Hessian equations on compact K\"ahler manifolds. By imposing a constraint on both the bisectional curvature and the oscillation of the solution, we demonstrate that the Laplacian estimate can be linearly controlled by its gradient estimate. Consequently, we are able to derive gradient estimate for the solution using a standard interpolation argument, without the need to employ the blow-up technique. As an application, we demonstrate that when the right-hand side of the complex Hessian equations approximate 1 in the $L^1$ norm, the desired gradient estimate is obtained.
summary_en: ''
abstract_ja: |-
  複素Hessian方程式の既知の二階評価は勾配の二乗に依存するため、通常の補間だけでは勾配評価を得にくい。本論文は、背景の双正則断面曲率に由来する定数と解の振幅の積に上界を課すことで、この依存を線形へ改善する。解の安定性から右辺がL¹で1に近い場合にも条件を満たせることを示し、補間論によって勾配とLaplacianの一様評価を導く。曲率と振幅の条件を外した一般の場合を解決するものではない。
abstract_source_url: https://arxiv.org/abs/2610.07852v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.07852v1](https://arxiv.org/abs/2610.07852v1)
- **著者:** Jiaogen Zhang, Xi Zhang
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.DG（主分類）、math.AP（副分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

複素Hessian方程式の滑らかな解を制御するには、勾配と二階微分の評価を結びつける必要がある。既知の二階評価には勾配の二乗が現れるため、その評価を通常の補間に代入するだけでは勾配の上界を閉じにくい。本論文は、この依存を線形にするための幾何的な十分条件を与える。

条件は、背景Kähler計量の双正則断面曲率から定まる定数と、解の最大値・最小値の差との積が小さいことである。この条件の下でLaplacianを勾配の一次式で抑えられ、補間法から両方の評価を導ける。従来のblow-up法とは異なる経路を与えるが、追加仮定を伴う部分的な解答である。

さらに右辺がL¹で定数1に近い場合を扱う。既知の解の安定性を使って振幅を小さくし、同じ評価を適用する構造になっている。曲率と振幅の積は計量のスケーリングで不変であるため、単に背景計量を拡大して条件を取り除くことはできない。

## 背景と問題設定

<p>
複素次元 $n$ のコンパクトKähler多様体 $(M,\omega)$ 上で、滑らかな正関数 $h$ と滑らかな実関数 $u$ に対する方程式
</p>

<div>
$$
\omega_u^k\wedge\omega^{n-k}=h\omega^n,\qquad
\omega_u=\omega+\sqrt{-1}\,\partial\bar\partial u\in\Gamma_k(M,\omega),
\qquad \int_M(h-1)\omega^n=0
$$
</div>

<p>
を考える。$\Gamma_k$ は固有値の最初の $k$ 個の基本対称式が正となる錐である。本論文の主対象は、Laplacian方程式とMonge–Ampère方程式の中間にある $2\le k\le n-1$ である。
</p>

<p>
既知のHou–Ma–Wu型評価は $\|\Delta_\omega u\|_{L^\infty}\le C(1+\|\nabla u\|_{L^\infty})^2$ という形を取る。本論文が求めるのは、右辺の二乗を外した評価である。
</p>

## 主結果

### 曲率と振幅による線形評価（Theorem 1.2）

<p>
論文の非負曲率定数を $\mathcal R_\omega$ とする。双正則断面曲率が非負なら0とし、そうでなければ、各点で単位ベクトル二つに関する曲率の下限を取り、その絶対値の全点上の上限とする。滑らかな $k$-admissible解について、
</p>

<div>
$$
\mathcal R_\omega\operatorname{osc}_M u
\lt\frac1{2(2+\log2)}
$$
</div>

なら、次の線形評価が成り立つ。

<div>
$$
\|\Delta_\omega u\|_{L^\infty}
\le C\bigl(1+\|\nabla u\|_{L^\infty}\bigr).
$$
</div>

<p>
定数 $C$ は $n,k,h,\operatorname{osc}_M u,(M,\omega)$ に依存する。上界の鋭さは主張されていない。中心条件は曲率だけでなく振幅との積に課される。
</p>

### 右辺が1に近い場合（Theorem 1.4）

<p>
ある一様定数 $\epsilon_0>0$ に対して
</p>

<div>
$$
\|h-1\|_{L^1(M)}\lt\epsilon_0
$$
</div>

<p>
を満たす滑らかな $k$-admissible解にも、同じ線形評価が成り立つ。Introductionは、既存の安定性結果により右辺の近さから振幅の小ささが得られることを、この応用の根拠として説明する。定数の依存性はTheorem 1.2と同様であり、任意の右辺族に対する一様性を追加して解釈しない。
</p>

### 補間による勾配・Laplacian評価（Theorem 1.5）

Theorem 1.2または1.4の仮定の下で、

<div>
$$
\|\nabla u\|_{L^\infty}+\|\Delta_\omega u\|_{L^\infty}\le C
$$
</div>

が得られる。線形な依存に改善したことによって、補間で現れる勾配の項を吸収して評価を閉じられる。追加仮定なしで線形評価が成り立つかというQuestion 1.1への一般解答は、Introductionでは今後の課題として残されている。

## 証明の見取り図

Section 2で曲率と振幅の条件を用いて二階評価を改良し、Theorem 1.2の線形評価を得る。Section 3では、右辺のL¹近接性と解の安定性を使ってその仮定を検証する。Section 4が補間を通じた勾配評価を担う。ここではIntroductionが示すこの論理的経路を紹介し、後続の最大値計算や補間の細部を再構成しない。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.07852v1
- **Introduction:** Section 1、pp. 1–4。
- **主要定理:** Theorems 1.2、1.4、1.5。中心式は(1.1)、(1.2)、(1.4)、(1.5)、(1.7)、(1.8)。閾値は原文の式で示し、小数近似は用いていない。
- **論文構成:** Section 2が線形な二階評価、Section 3がL¹近接性、Section 4が補間法。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction
