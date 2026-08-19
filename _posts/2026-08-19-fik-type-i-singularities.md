---
layout: paper
title: "Finite Time Type I Singularities of the Kähler Ricci Flow"
title_ja: "Kähler–Ricci流の有限時間Type I特異点"
authors: "Tongxin Xu, Zhenlei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove the Feldman--Ilmanen--Knopf conjecture for finite time Type I singularities of the Kähler--Ricci flow. More precisely, for any compact Kähler manifold $Y$ and its blow-up $π:\operatorname{Bl}_pY\longrightarrow Y$, if $[ω_0]-Tc_1(M)=π^*[ω_Y]$, then any Type I parabolic blow-up limit of the Kähler Ricci flow along the exceptional divisor is the FIK shrinker $\operatorname{Tot}(\mathcal{O}_{\mathbb{P}^{n-1}}(-1))$.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - metric-limits
  - birational-geometry
  - curvature
arxiv_id: "2608.17458v1"
arxiv_url: "https://arxiv.org/abs/2608.17458"
arxiv_submitted: "2026-08-18"
arxiv_updated: "2026-08-18"
summary: >-
  点でのblow-upが収縮するKähler–Ricci流について、有限時間Type I特異点の任意の放物型blow-up極限がFeldman–Ilmanen–Knopf shrinkerになることを証明する。解析的な極限構造と相対Mori理論を組み合わせ、対称性を仮定せず局所モデルを一意に決定する。
abstract_en: ""
summary_en: >-
  This work identifies the local model of a finite-time Type I Kähler–Ricci flow singularity created by contracting the exceptional divisor of a point blow-up. Under the stated cohomological point-contraction condition, every parabolically rescaled subsequential limit based on that divisor is the FIK shrinking soliton. The argument first detects the maximal compact analytic subset of the limit and then uses a polarized Fano fibration and relative Mori theory to identify the underlying complex manifold. A uniqueness theorem finally fixes the shrinking metric.
abstract_ja: >-
  コンパクトKähler多様体 $Y$ の一点blow-up $M=\operatorname{Bl}_pY$ 上のKähler–Ricci流を考える。初期類が $[\omega_0]-Tc_1(M)=\pi^*[\omega_Y]$ を満たし、有限時間特異点がType Iなら、例外因子に沿う任意の放物型blow-up極限は $\operatorname{Tot}(\mathcal O_{\mathbb P^{n-1}}(-1))$ 上のFIK shrinkerであることを証明する。
abstract_source_url: "https://arxiv.org/abs/2608.17458"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.17458](https://arxiv.org/abs/2608.17458)
- **著者:** Tongxin Xu, Zhenlei Zhang
- **初回投稿日:** 2026年8月18日
- **最終更新日:** 2026年8月18日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci流の有限時間特異点を放物型に拡大すると、Type Iの場合には完備な非平坦Kähler–Ricci shrinkerが極限として現れる。しかし、点のblow-upの例外因子を収縮する基本的な状況でも、一般の高次元・非対称な流で極限がどのshinkerかを決定することは課題だった。

Feldman–Ilmanen–Knopf（FIK）shrinkerは、$\operatorname{Tot}(\mathcal O_{\mathbb P^{n-1}}(-1))$ 上の $U(n)$ 不変な局所モデルである。従来は対称性を仮定した場合や複素次元2で同定されていた。本論文は、点収縮を表すコホモロジー条件のもとで、対称性なしにこの予想を証明する。

結論は部分列の選び方や例外因子上の基点に依存しない。任意の拡大率列から得るType Iの部分極限がFIK shrinkerになるため、特異点の接モデルに強い剛性がある。

証明は解析と代数幾何を接続する。まず極限内の最大コンパクト解析集合を抽出し、次にpolarized Fano fibrationと相対Mori錐を使って極限の複素多様体が一点blow-up $\operatorname{Bl}_0\mathbb C^n$ だと示し、最後にshrinkerの一意性を適用する。

## 背景と問題設定

非正規化Kähler–Ricci流は

$$
\frac{\partial}{\partial t}\omega(t)=-\operatorname{Ric}(\omega(t)),\qquad \omega(0)=\omega_0
$$

であり、最大存在時間を $T<\infty$ とする。Type I条件は

$$
\sup_M|\operatorname{Rm}(\omega(t))|_{\omega(t)}\leq\frac{C}{T-t}
$$

である。対象は $M=\operatorname{Bl}_pY$、例外因子 $E\simeq\mathbb P^{n-1}$ で、純粋な点収縮条件

$$
[\omega_0]-Tc_1(M)=\pi^*[\omega_Y]
$$

を仮定する。このとき流は非collapseで、特異点集合は $E$ に一致する。

## 主結果

### FIK予想（Theorem 1.1）

上の条件を満たす有限時間Type I Kähler–Ricci流について、任意の $\lambda_j\to\infty$ と $x\in E$ に対し

$$
g_j(s)=\lambda_j g(T+s/\lambda_j),\qquad s\in[-\lambda_jT,0)
$$

で定める pointed flow は、部分列を取ればpointed $C^\infty$ Cheeger–Gromov位相で

$$
\operatorname{Tot}(\mathcal O_{\mathbb P^{n-1}}(-1))
$$

上の一意なFIK shrinkerへ収束する。Introductionの主張は「ある部分列極限がFIKである」だけでなく、任意の拡大列と例外因子上の任意の基点に適用される。

## 証明の見取り図

Type I compactnessから極限 $(X,g_\infty,J_\infty)$ を得る。再尺度化された例外因子の一様直径評価により、それらを極限側の固定コンパクト集合へ引き戻し、正のcompact analytic cycle $Z$ を得る。logarithmic Ricci potentialとlocalizationにより、$Z$ が $X$ のすべての正次元compact analytic subvarietyを含む最大コンパクト解析集合だと示す。

次に極限shrinkerに polarized Fano fibration $q:X\to W$ を構成する。$Z$ の最大性から $q$ は双有理で、$q^{-1}(o)=Z$ となる。相対極端rayの長さについて、局所Chern類計算の下界と相対Ionescu–Wiśniewski不等式の上界がともに $n-1$ を与える。等号の場合の収縮定理から例外因子は $\mathbb P^{n-1}$、法束は $\mathcal O(-1)$ であり、$q$ は滑らかな点の通常のblow-upになる。正のgradingから $W\simeq\mathbb C^n$、したがって $X\simeq\operatorname{Bl}_0\mathbb C^n$。最後に既知の一意性定理により計量をFIK shrinkerと同定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.17458](https://arxiv.org/abs/2608.17458)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.1
- **論文構成の説明:** pp. 2–3（Outline of the proof）
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
