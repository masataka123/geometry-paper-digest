---
layout: paper
title: "Spectral almost rigidity on Kähler manifolds with positive Ricci lower bound"
title_ja: "正Ricci下界を持つKähler多様体のスペクトル概剛性"
authors: "Haohao Wang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this work, a sharp K\"ahler spectral almost-rigidity theorem was established, resolving Conjecture 1.8 of Chu--Wang--Zhang. For compact K\"ahler manifolds satisfying $\Ric(\omega)\geq\omega$, pinching the first $n^2+3$ nonzero complex eigenvalues to one forces the manifolds to be Gromov Hausdorff close to normalized complex projective space and determines the biholomorphism type. The smaller index $n^2+1$ is the sharp threshold for noncollapsing. More generally, if a normalized measured limit has essential real dimension $r$, then the multiplicity of the critical eigenvalue is at most $r+\lfloor r/2\rfloor^2$, with equality attained in every dimension. A uniform energy estimate for kernel projections of complex gradient Gram matrices leads to a Lie algebra action on the whole spectral resolution.
topic: differential-geometry
tags:
  - curvature
  - metric-limits
arxiv_id: "2609.12525v1"
arxiv_url: "https://arxiv.org/abs/2609.12525"
arxiv_submitted: "2026-09-11"
arxiv_updated: "2026-09-11"
summary: >-
  $\operatorname{Ric}(\omega)\geq\omega$ を満たすコンパクトKähler $n$ 次元多様体で、第 $n^2+3$ 固有値が1に近ければ、正規化された射影空間にGromov--Hausdorff近接し双正則型も一致することを示す。体積下界を仮定せず、非崩壊に必要な鋭い閾値 $n^2+1$ と、崩壊極限で残る臨界固有空間の次元評価も与える。
abstract_en: ""
summary_en: >-
  The paper proves a sharp Kähler analogue of spectral almost rigidity under a positive Ricci lower bound. Pinching through the $(n^2+3)$rd complex eigenvalue forces both Gromov--Hausdorff proximity to normalized projective space and the same biholomorphism type, without assuming noncollapse. A separate sharp threshold at $n^2+1$ guarantees a uniform volume lower bound. For collapsed measured limits, the multiplicity of the critical eigenvalue is bounded explicitly by the essential dimension, and every equality case is realized.
abstract_ja: >-
  正Ricci下界を持つコンパクトKähler多様体に対する鋭いスペクトル概剛性定理を証明し、Chu--Wang--Zhangの予想を解決する。$\operatorname{Ric}(\omega)\geq\omega$ のもとで最初の $n^2+3$ 個の非零複素固有値が1へpinchされれば、多様体は正規化された複素射影空間にGromov--Hausdorff近接し、双正則型も射影空間となる。非崩壊だけを導く鋭い閾値は $n^2+1$ である。より一般に、本質的実次元 $r$ の正規化測度付き極限で臨界固有値の重複度は $r+\lfloor r/2\rfloor^2$ 以下となり、各次元で等号例が存在する。
abstract_source_url: "https://arxiv.org/abs/2609.12525"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.12525](https://arxiv.org/abs/2609.12525)
- **著者:** Haohao Wang
- **初回投稿日:** 2026年9月11日
- **最終更新日:** 2026年9月11日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Lichnerowicz--Obata理論とPetersen--Aubryの球面概剛性には、Ricci下界とLaplacian固有値のpinchingから標準模型を復元するという流れがある。Kählerの場合、固有値1だけではKähler--Einstein積も許すため、その重複度が決定的となる。

主定理は $\lambda_{n^2+3}$ が1に十分近いことから、体積下界やKähler類の仮定なしに $\mathbb{CP}^n$ へのGromov--Hausdorff近接と双正則同型を導く。積 $\mathbb{CP}^{n-1}\times\mathbb{CP}^1$ が $n^2+2$ 個の固有関数を持つため、この添字は鋭い。

非崩壊にはより小さい $n^2+1$ が鋭い閾値となる。またRCD極限の本質的実次元と臨界固有空間の次元を結ぶ最適評価により、崩壊で失われる次元と残存する対称性を数量化する。

## 背景と問題設定

複素Laplacianの正固有値を $\lambda_1\leq\lambda_2\leq\cdots$ とし、正規化Fubini--Study計量 $\omega_n$ は $\operatorname{Ric}(\omega_n)=\omega_n$ を満たす。Ricci下界のもとで $\lambda_1\geq1$ だが、等号のみでは射影空間を特徴づけないことがRiemann幾何の場合との相違である。

## 主結果

### 射影空間への概剛性（Theorem 1.1）

$n\geq2$ とする。任意の $\epsilon>0$ に対し $\delta(n,\epsilon)>0$ が存在し、

$$
\operatorname{Ric}(\omega)\geq\omega,\qquad \lambda_{n^2+3}(M,\omega)\leq1+\delta(n,\epsilon)
$$

なら $M$ は $\mathbb{CP}^n$ と双正則で、$d_{\mathrm{GH}}((M,g),(\mathbb{CP}^n,g_n))<\epsilon$ となる。定量的power-law評価までは主張しない。

### 非崩壊の鋭い閾値（Theorem 1.2）

次元だけに依存する $\delta_0(n),v_0(n)>0$ が存在し、$\lambda_{n^2+1}\leq1+\delta_0(n)$ なら $\operatorname{Vol}_g(M)\geq v_0(n)$ となる。$n^2$ 個まででは崩壊する滑らかな例があるため添字は最適である。

### 崩壊極限の臨界重複度（Theorem 1.3）

正規化測度付き極限の本質的実次元を $r$、固有値2の実固有空間の次元を $q$ とすると

$$
q\leq r+\left\lfloor\frac r2\right\rfloor^2.
$$

各 $0\leq r\leq2n$ に等号を実現する滑らかなKähler多様体列が存在する。

## 証明の見取り図

証明はまず臨界スペクトルcluster全体からコンパクト型Lie代数を構成する。複素gradientのGram行列のkernel射影に対する一様energy評価により、可換方向の変動する零空間を排除し、高重複度で中心を消して作用をfull rankにする。この作用を全固有空間へ拡張し、その余随伴像から非崩壊と推移性を得る。最後に滑らかなKähler構造を回復し、既知の等号剛性定理を適用する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.12525](https://arxiv.org/abs/2609.12525)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.3
- **論文構成の説明:** Introductionの主定理後のproof overview
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
