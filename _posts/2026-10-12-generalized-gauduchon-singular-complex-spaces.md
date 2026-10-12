---
layout: paper
title: Generalized Gauduchon metrics on compact complex spaces
title_ja: コンパクト複素空間上の一般化Gauduchon計量
authors: Yong Chen, Xi Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $X$ be an irreducible reduced compact complex space of dimension $n$, and let $\omega$ be a Hermitian metric on $X$. For each $1\le k\le n-1$, we prove that there exist a constant $c_k$ and a smooth positive function $\rho$ on $X_{\mathrm{reg}}$ such that $\ii\partial\bar\partial(\rho\omega^k)\wedge\omega^{n-k-1}=c_k\rho\omega^n$. The function $\rho$ is bounded above and bounded away from zero. The constant $c_k$ is unique, and $\rho$ is unique up to a positive multiple among bounded smooth positive solutions. We also prove that the full sign set $\{-1,0,1\}$ of the generalized Gauduchon constants $c_k$ on a compact complex manifold is preserved by finite sequences of blow-ups with smooth centers.
topic: differential-geometry
tags:
- complex-analytic-spaces
- singularities
arxiv_id: 2610.13005v1
arxiv_url: https://arxiv.org/abs/2610.13005
arxiv_submitted: '2026-10-09'
arxiv_updated: '2026-10-09'
summary: 既約被約コンパクト複素空間の正則部分で、一般化Gauduchon方程式の正の有界解と定数の存在・一意性を示す。共形因子は零からも一様に離れ、滑らかな中心のblow-upでは定数の正負の実現と全符号集合が上へ保存される。
abstract_en: ''
summary_en: Generalized Gauduchon equations connect a Hermitian metric with a distinguished constant and a positive conformal factor. Chen and Zhang extend the existence and uniqueness theory across singular complex spaces by working on their regular loci. Uniform estimates prevent the conformal factors from degenerating near the singular set. A separate result transfers positive and negative signs of the constants from a manifold to its smooth blow-ups.
abstract_ja: 滑らかなHermitian多様体で知られていた一般化Gauduchon方程式を、既約被約コンパクト複素空間へ拡張する。正則部分の解には上下からの一様な正の評価があり、定数は一意、関数は正の定数倍を除いて一意となる。特異点解消上の近似計量と一様評価で存在を得て、特異集合近くのcutoff評価で一意性を扱う。また滑らかな中心の有限回のblow-upに関して、負および正の定数を実現できることは上へ引き継がれる。
abstract_source_url: https://arxiv.org/abs/2610.13005
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.13005v1](https://arxiv.org/abs/2610.13005)
- **著者:** Yong Chen, Xi Zhang
- **初回投稿日:** 2026-10-09
- **最終更新日:** 2026-10-09
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Gauduchon計量は非Kähler複素多様体でベクトル束の次数や安定性を考えるための基礎となる。しかし、より低い次数の微分形式に対して同様の消滅方程式を要求すると、必ずしも解が存在しない。そのため、右辺に定数を許す一般化Gauduchon方程式が導入されている。

本論文は、その存在と一意性を特異点のある既約被約コンパクト複素空間へ拡張する。解は正則部分上で滑らかであり、共形因子が上から有界であるだけでなく零からも離れるため、背景計量と一様に同程度の大きさを保つ。

さらに、定数の符号がどのように実現されるかをblow-upの前後で比較する。主張は基底で実現できる正・負の符号をblow-up上へ移す方向であり、任意の双有理変換に関する符号集合の完全な不変性を証明したとは述べない。

## 背景と問題設定

<p>滑らかなコンパクト複素 $n$ 次元多様体のHermitian計量 $\omega$ に対し、古典的なGauduchon条件は $\sqrt{-1}\partial\bar\partial\omega^{n-1}=0$ である。一般の $1\le k\le n-1$ では</p>

<div>
$$
\sqrt{-1}\partial\bar\partial(\rho\omega^k)\wedge\omega^{n-k-1}
=c_k\rho\omega^n
$$
</div>

<p>を考える。滑らかな場合の定数と正の解の存在・一意性はFu–Wang–Wangの既知の定理であり、本論文ではTheorem 1.1として引用される。$c_k=0$ のとき $\widetilde\omega=\rho^{1/k}\omega$ は $k$-Gauduchon計量となる。したがって、定数を許す方程式が解けることと、零定数の計量が常にあることは異なる。</p>

## 主結果

### 主定理1：特異複素空間上の存在と一意性（Theorem 1.3）

<p>$X$ は既約被約コンパクト複素空間、$\dim X=n$、$\omega$ はそのHermitian計量とする。各 $1\le k\le n-1$ について定数 $c_k$ と $\rho\in C^\infty(X_{\mathrm{reg}})\cap L^\infty(X_{\mathrm{reg}})$ が存在し、上の方程式を正則部分上で満たし、</p>

<div>
$$
0<\inf_{X_{\mathrm{reg}}}\rho\le\sup_{X_{\mathrm{reg}}}\rho<\infty
$$
</div>

<p>となる。有界で滑らかな正の解のクラスにおいて $c_k$ は一意で、$\rho$ は正の定数倍を除いて一意である。特に $\inf\rho=1$ とすれば関数も一意となる。$k=n-1$ では $c_{n-1}=0$、背景計量がKählerならすべての $k$ で $c_k=0$、$\rho$ は定数である。</p>

### 主定理2：blow-upへの符号の保存（Theorem 1.5）

<p>コンパクト複素多様体 $M$ について</p>

<div>
$$
C_k(M)=\{\operatorname{sgn}c_k(\omega):\omega\text{ は }M\text{ 上のHermitian計量}\}
\subseteq\{-1,0,1\}
$$
</div>

<p>とする。同じ次元 $n$ のコンパクト連結複素多様体の間で、$X\to Y$ が滑らかな中心の有限回のblow-upの合成なら、$1\le k\le n-2$ に対して</p>

<div>
$$
-1\in C_k(Y)\Longrightarrow-1\in C_k(X),\qquad
1\in C_k(Y)\Longrightarrow1\in C_k(X).
$$
</div>

<p>したがって $C_k(Y)=\{-1,0,1\}$ なら $C_k(X)=\{-1,0,1\}$ である。零の実現は定数の計量に関する連続性と正負の実現から導く。任意の符号集合について $C_k(X)=C_k(Y)$ を断言する定理ではなく、零だけが実現される場合などへの結論を付け加えてはならない。</p>

## 証明の見取り図

特異点解消上で引き戻し計量を正の計量で摂動し、滑らかな場合の定理を適用する。解の正および負の冪を使う評価と、一様なSobolev・Poincaré不等式を組み合わせ、摂動に依存しない上限を得る。局所楕円型評価により、例外集合の外で滑らかな極限を取る。

<p>一意性では、方程式に付随する線形作用素の形式随伴が別の次数の作用素になる関係と、特異集合近くのcutoff評価を用いる。有界解の有限エネルギーを示すことで、定数と正の関数の一意性へ進む。Introductionはこの議論から $c_k(\omega)=c_{n-k-1}(\omega)$ も得ると述べる。</p>

blow-upの結果では、引き戻しを摂動した計量の定数が元の定数へ収束することを示す。中心の外で得る極限方程式の解を基底全体へ延長することが、その比較を成立させる。

## 原論文との対応

- **Abstractページ:** [Generalized Gauduchon metrics on compact complex spaces](https://arxiv.org/abs/2610.13005)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.13005v1) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.5（Theorem 1.1は既知の結果）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.13005v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
