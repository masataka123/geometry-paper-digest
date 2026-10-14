---
layout: paper
title: Global $C^{2,α}$ estimate for complex Monge--Ampère equations on compact Kähler manifolds
title_ja: Hölder連続な密度を持つ複素Monge–Ampère方程式の大域的正則性
authors: Haozhao Li, Bing Wang, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AP
arxiv_abstract: In this paper, we prove a global $C^{2,\alpha}$ estimate for the complex Monge--Amp\`ere equation with a positive $C^\alpha$ right-hand side on a compact K\"ahler manifold.
topic: differential-geometry
tags:
- monge-ampere-equations
- pluripotential-theory
arxiv_id: 2610.14870v1
arxiv_url: https://arxiv.org/abs/2610.14870
arxiv_submitted: '2026-10-10'
arxiv_updated: '2026-10-10'
summary: コンパクトKähler多様体上で、正のHölder連続な密度を持つ複素Monge–Ampère方程式の有界な弱解に、大域的C²,α評価を与える。密度の高階微分を仮定せず、楕円型近似と補助放物型方程式でポテンシャルの正則性を引き上げる。
abstract_en: ''
summary_en: Classical solvability of the complex Monge–Ampère equation does not by itself give uniform second-derivative bounds for rough densities. This paper treats positive Hölder densities on a compact Kähler manifold and upgrades bounded pluripotential solutions to the full expected Hölder regularity. The estimate uses only fixed background data and the stated density norm. An iteration between approximation and a parabolic auxiliary equation supplies the regularity needed for a local theorem.
abstract_ja: コンパクトKähler多様体上の複素Monge–Ampère方程式について、右辺が正のHölder連続な関数であるとき、有界な多重ポテンシャル論的解に大域的なC²,α評価を示す。評価定数は背景幾何と密度のHölderノルムなどで制御され、高階微分の上限には依存しない。楕円型近似による初期評価を補助放物型方程式で改善し、局所正則性定理へ結びつける。
abstract_source_url: https://arxiv.org/abs/2610.14870
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.14870v1](https://arxiv.org/abs/2610.14870)
- **著者:** Haozhao Li, Bing Wang, Kai Zheng
- **初回投稿日:** 2026-10-10
- **最終更新日:** 2026-10-10
- **主分類・副分類:** math.DG（主分類）; math.AP
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素Monge–Ampère方程式はKähler計量の体積を指定する基本方程式である。滑らかな右辺に対する存在と正則性は古典的だが、右辺がHölder連続でしかない場合には、その微分を用いずに解の二階微分を評価する必要がある。

本論文は、コンパクトKähler多様体上の有界な多重ポテンシャル論的解が、右辺と対応する完全なHölder指数でC²,α級になることを示す。得られる計量は厳密に正であり、評価定数は背景計量と密度のHölderノルムなどにのみ依存する。IntroductionはChen–Chengの予想のC²,α部分への肯定的回答として位置づける。

鍵は、局所評価に必要な解の正則性を、大域方程式から作り出すことである。楕円型近似で最初のC¹,β評価を得た後、補助放物型方程式を通じて指数を改善し、既存の局所定理を適用できる閾値を越える。

## 背景と問題設定

<p>連結コンパクトKähler多様体 $(M^n,g)$、$n\ge2$ とKähler形式 $\omega_g$ を固定し、</p>

<div>
$$
(\omega_g+\sqrt{-1}\partial\bar\partial\varphi)^n=e^F\omega_g^n
$$
</div>

<p>を考える。正規化体積測度を $d\mu_g=(\int_M\omega_g^n)^{-1}\omega_g^n$ とすると、整合条件は $\int_Me^F\,d\mu_g=1$ である。</p>

密度の上下界から行列式は制御できても、計量のtraceが制御できるとは限らない。したがって局所の一様楕円性やLaplacian評価を仮定する正則性定理だけでは、大域問題は解決しない。Introductionは、弱い密度に対するポテンシャルや勾配の既知評価を背景に、この不足を説明する。

## 主結果

### 大域的C²,α評価（Theorem 1.1）

<p>$0\lt \alpha\lt 1$、$K>0$ を固定し、実数値関数 $F$ が</p>

<div>
$$
\|F\|_{C^\alpha(M,g)}\le K,\qquad\int_Me^F\,d\mu_g=1
$$
</div>

<p>を満たすとする。$\varphi\in\operatorname{PSH}(M,\omega_g)\cap L^\infty(M)$ が方程式を多重ポテンシャル論の意味で満たし、$\int_M\varphi\,d\mu_g=0$ と正規化されていれば、</p>

<div>
$$
\varphi\in C^{2,\alpha}(M),\qquad
\|\varphi\|_{C^{2,\alpha}(M,g)}\le C(M,g,n,\alpha,K),\qquad
\omega_g+\sqrt{-1}\partial\bar\partial\varphi>0
$$
</div>

<p>となる。$\sup_M\varphi=0$ という正規化でも定数を変えれば同じ結論が成立する。</p>

右辺の高階微分や、解の二階微分の事前評価を仮定しない点が重要である。また最終指数を元のHölder指数より小さくする必要はない。これはコンパクトな大域問題の結論であり、一般の局所問題で密度とポテンシャルの大きさだけから同じ評価が出るとは主張しない。

## 証明の見取り図

<p>背景計量の熱作用素 $P_t=e^{t\Delta_g}$ を用いて密度を滑らかにし、楕円型方程式の解 $\varphi_\varepsilon$ を作る。Chen–Chengの勾配評価とGreen公式の相殺から、</p>

<div>
$$
\|\varphi_\varepsilon-\varphi\|_\infty
\le C\varepsilon^{1+\alpha}(1+|\log\varepsilon|)
$$
</div>

<p>という近似を得て、trace評価と補間によりまず任意の $\beta\lt \alpha$ のC¹,β評価を確保する。</p>

次に補助方程式

<div>
$$
\partial_t\psi=\log\frac{\omega_{\psi(t)}^n}{\omega_g^n}-P_tF,
\qquad\psi(0)=\varphi
$$
</div>

<p>を用いる。時間依存の右辺を選ぶことで $\|\psi(t)-\varphi\|_\infty\le Ct^{1+\alpha/2}$ と近似でき、重み付きエネルギー評価、空間補間、放物型Moser反復からtraceを制御する。</p>

<p>その評価により正則性指数を</p>

<div>
$$
B_\alpha(\beta)=\frac{\alpha+(4+\alpha)\beta}{4+\alpha+\alpha\beta}
$$
</div>

<p>未満の指数へ改善する。有限回の反復でLi–Li–Zhangの局所定理の閾値 $\beta>1-\alpha/(n(2+\alpha)-1)$ を越え、有限個の座標近傍を通して大域評価を得る。コンパクト性によって部分積分の境界項がなく、固定Kähler類でのGreen・Sobolev評価を使えることがこの連結を支える。最後に滑らかな正の密度による近似と極限で一般のHölder密度へ戻す。</p>

## 原論文との対応

- **Abstractページ:** [Global $C^{2,α}$ estimate for complex Monge--Ampère equations on compact Kähler manifolds](https://arxiv.org/abs/2610.14870)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.14870v1) — Section 1, pp. 1–3（Section 2より前）。
- **Introduction中で言及された主要結果:** Theorem 1.1およびIntroductionの5段階の証明方針。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.14870v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
