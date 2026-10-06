---
layout: paper
title: Long-time existence of the Calabi flow on K\"ahler surfaces with bounded Sobolev constants
title_ja: Sobolev定数が有界なKähler曲面上のCalabi流の長時間存在
authors: Haozhao Li, Bing Wang, Kai Zheng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We prove that the Calabi flow extends past any finite time on compact K\"ahler surfaces if its Sobolev constants remain uniformly bounded. Moreover, we show the long-time existence of Calabi flow in certain K\"ahler classes on compact K\"ahler surfaces when the initial Calabi energy is strictly below an explicit threshold.
topic: differential-geometry
tags:
- csck-extremal-kahler-metrics
- curvature
arxiv_id: 2610.05217v1
arxiv_url: https://arxiv.org/abs/2610.05217
arxiv_submitted: '2026-10-04'
arxiv_updated: '2026-10-04'
summary: |-
  コンパクトKähler曲面上のCalabi流は、Sobolev定数が一様有界なら有限時刻を越えて滑らかに延長できる。さらにKähler類のChern数による正値条件と初期Calabiエネルギーの明示的な上界から、トーリック対称性を仮定しない長時間存在を導く。
abstract_en: ''
summary_en: |-
  Finite-time singularities of Calabi flow are ruled out on compact Kähler surfaces by a uniform Sobolev bound. The argument localizes a hypothetical curvature bubble and uses topology to exclude it. A separate energy criterion provides the Sobolev control from the initial metric and its Kähler class. These results concern smooth existence and do not settle unrestricted long-time existence or convergence in every class.
abstract_ja: |-
  コンパクトKähler曲面上のCalabi流について、Sobolev定数が一様有界である限り、任意の有限時刻を越えて流を延長できることを示す。また、あるKähler類で初期Calabiエネルギーが明示的な閾値より厳密に小さければ、Calabi流が全時間存在することを証明する。
abstract_source_url: https://arxiv.org/abs/2610.05217
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05217v1](https://arxiv.org/abs/2610.05217)
- **著者:** Haozhao Li, Bing Wang, Kai Zheng
- **初回投稿日:** 2026-10-04
- **最終更新日:** 2026-10-04
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Calabi流は、固定したKähler類の中でextremal計量やcscK計量を探すための四階の幾何学的流である。弱い意味の大域的な流の構成は進んでいるが、滑らかな解が有限時刻で特異化しないことは一般には未解決である。

本論文は複素次元2において、Sobolev定数の一様有界性だけで有限時間特異点を排除できることを示す。曲率の有界性を直接仮定する従来の延長基準に対し、関数空間の不等式の制御から曲率を回復する結果となる。

さらにKähler類と初期Calabiエネルギーに数値条件を課すと、必要なSobolev定数の制御が得られ、流の全時間存在が従う。この系ではトーリック対称性を仮定せず、Fano性より弱い第一Chern類との交点条件を用いる。ただし、任意の初期計量に対する長時間存在予想や、全時間解の収束を無条件に解決したものではない。

## 背景と問題設定

コンパクトKähler曲面 $(M,J,\omega)$ で $\Omega=[\omega]$、$\omega_\varphi=\omega+i\partial\bar\partial\varphi$ と置く。原論文の正規化は

<div>
$$
V=\Omega^2=\int_M\omega^2,\qquad
 d\mu_\varphi=V^{-1}\omega_\varphi^2,\qquad
\overline R=\frac{4\pi}{V}c_1(M)\cdot\Omega
$$
</div>

である。Calabi流と正規化Calabiエネルギーを

<div>
$$
\partial_t\varphi=R_\varphi-\overline R,\qquad
\mathcal C(\varphi)=\int_M(R_\varphi-\overline R)^2\,d\mu_\varphi
$$
</div>

と定める。エネルギーは流に沿って単調非増加である。$C_S(\varphi)$ は、この確率測度と対応する実Riemann計量に関する $W^{1,2}\to L^4$ Sobolev不等式の最良定数を表す。

## 主結果

### 主定理：Sobolev定数による有限時間延長（Theorem 1.2）

コンパクトKähler曲面上で $[0,T)$、$T<\infty$ に定義されたCalabi流が

<div>
$$
\sup_{0\leq t\lt T}C_S(\varphi(t))\lt \infty
$$
</div>

を満たすなら、時刻 $T$ を越えて滑らかに延長できる。従って、この次元では有限時間特異点が起きるためにはSobolev定数の制御も失われる必要がある。

### 初期エネルギーによる長時間存在（Corollary 1.3）

滑らかな初期ポテンシャル $\varphi_0$ を持つ固定類 $\Omega$ のCalabi流について、

<div>
$$
c_1(M)\cdot\Omega>0,
\qquad
\delta_\Omega=c_1(M)^2-
\frac{2(c_1(M)\cdot\Omega)^2}{3V}>0
$$
</div>

かつ

<div>
$$
\mathcal C(\varphi_0)\lt \frac{16\pi^2}{V}\delta_\Omega
$$
</div>

なら、流は全ての $t\geq0$ に対して存在する。エネルギーの不等号は厳密であり、閾値の係数は上で定めた正規化を前提とする。

トーリック不変性は不要である。また $c_1(M)\cdot\Omega>0$ は、第一Chern類自体の正値性を求めるFano条件より弱い。ここでの結論は長時間存在であり、極限がcscK計量になるという収束結論を追加していない。

## 証明の見取り図

曲率が発散すると仮定すると、既知のblow-up解析により非平坦なscalar-flat Kähler ALE曲面が現れる。Introductionは、ポテンシャルの有界性と局所的な調和写像評価を使い、このbubbleのコンパクトな核が元の曲面の一つの座標球の中へ埋め込まれることを示す方針を述べる。

この埋め込みは核とその境界のホモロジーに制約を課す。ALE曲面に関する既知の構造結果を適用すると、該当するbubbleは平坦でなければならず、blow-up時の曲率の正規化に矛盾する。これによって曲率上界を得て延長定理へ戻る。

系の証明では、Yamabe定数とCalabiエネルギーの関係を、エネルギーの単調性と組み合わせる。初期の厳密なエネルギー上界がSobolev不等式を一様に制御し、主定理によって有限の最大存在時刻を排除する。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.05217](https://arxiv.org/abs/2610.05217)
- **Introduction:** Section 1、pp. 1–4。
- **主要定理・式:** Theorem 1.2、Corollary 1.3、式(1.1)–(1.4)。Conjecture 1.1は一般の長時間存在予想として区別した。
- **論文構成:** p. 4。Section 3でbubbleの局所化と排除、Section 4で主結果を示す。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
