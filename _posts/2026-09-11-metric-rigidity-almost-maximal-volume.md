---
layout: paper
title: "Metric rigidity of Kahler manifolds with lower Ricci bounds and almost maximal volume"
title_ja: "Ricci曲率下界とほぼ最大体積をもつKähler多様体の距離剛性"
authors: "Ved Datar, Harish Seshadri, Jian Song"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this short note we prove that a Kahler manifold with lower Ricci curvature bound and almost maximal volume is Gromov-Hausdorff close to the projective space with the Fubini-Study metric. This is done by combining the recent results of Kewei Zhang and Yuchen Liu on holomorphic rigidity of such Kahler manifolds with the structure theorem of Tian-Wang for almost Einstein manifolds. This can be regarded as the complex analog of the result on Colding on the shape of Riemannian manifolds with almost maximal volume
topic: differential-geometry
tags:
  - curvature
  - metric-limits
arxiv_id: "2010.10925v1"
arxiv_url: "https://arxiv.org/abs/2010.10925"
arxiv_submitted: "2020-10-21"
arxiv_updated: "2020-10-21"
summary: >-
  Ricci曲率がKähler形式以上で、体積がFubini–Study計量を入れた複素射影空間の最大値に十分近いKähler多様体を扱う。体積欠損が小さければ多様体全体が複素射影空間にGromov–Hausdorff距離で近いことを示し、正則剛性を距離剛性へ高める。
abstract_en: ""
summary_en: >-
  This note studies compact Kähler manifolds under a normalized lower Ricci bound when their volume nearly reaches the sharp projective-space value. It proves quantitative Gromov–Hausdorff closeness to complex projective space with its Fubini–Study metric. The argument first uses holomorphic rigidity to identify the underlying complex manifold and then invokes structure results for almost Einstein limits. The conclusion is presented as a complex counterpart of Colding's almost-maximal-volume rigidity.
abstract_ja: >-
  Ricci曲率に下界をもち、体積が最大値に近いKähler多様体は、Fubini–Study計量を備えた複素射影空間にGromov–Hausdorff距離で近いことを証明する。Kähler多様体の正則剛性に関する結果と、概Einstein多様体に対するTian–Wangの構造定理を組み合わせる。これは、ほぼ最大体積をもつRiemann多様体の形に関するColdingの結果の複素版に当たる。
abstract_source_url: "https://arxiv.org/abs/2010.10925"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2010.10925v1](https://arxiv.org/abs/2010.10925)
- **著者:** Ved Datar, Harish Seshadri, Jian Song
- **初回投稿日:** 2020年10月21日
- **最終更新日:** 2020年10月21日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

$(M^n,\omega)$ を $\operatorname{Ric}(\omega)\geq\omega$ を満たすKähler多様体とする。Zhangの体積評価によれば、その体積は $\operatorname{Ric}(\omega_{\mathbf{CP}^n})=\omega_{\mathbf{CP}^n}$ と規格化したFubini–Study計量の体積を超えず、等号は複素射影空間に限る。

本論文は等号の場合だけでなく、体積が最大値に十分近い場合の定量的剛性を証明する。任意の許容誤差に対し体積欠損の閾値が存在し、その閾値より欠損が小さければGromov–Hausdorff距離も許容誤差より小さくなる。

鍵は、Liuによる「ほぼ最大体積なら基礎複素多様体が $\mathbf{CP}^n$ である」という正則剛性と、Tian–Wangによる概Einstein多様体の極限構造を接続する点にある。したがって結論は複素構造の同定に留まらず、計量そのもののFubini–Study計量への近さを与える。

## 背景と問題設定

実Riemann幾何では、Ricci曲率下界のもとで体積が球面の最大値に近ければ空間が球面にGromov–Hausdorff距離で近いというColdingの定理がある。本論文は、最大モデルを $\mathbf{CP}^n$ とするKähler版を問題とする。Introductionは、Kähler–Einstein Fano多様体における先行する体積評価や、K-安定性と安定性閾値を用いた正則剛性も位置づけている。

## 主結果

### 距離剛性（Theorem 1）

任意の $\varepsilon>0$ に対し $\delta=\delta(\varepsilon,n)>0$ が存在する。$\operatorname{Ric}(\omega)\geq\omega$ かつ

$$
\operatorname{Vol}(M,\omega)>(1-\delta)\operatorname{Vol}(\mathbf{CP}^n,\omega_{\mathbf{CP}^n})
$$

ならば、

$$
d_{GH}\bigl((M,\omega),(\mathbf{CP}^n,\omega_{\mathbf{CP}^n})\bigr)<\varepsilon
$$

が成り立つ。重要なのは、体積のほぼ等号成立から位相的・正則な分類だけでなく、全体の距離空間としての近さを得る点である。

## 証明の見取り図

まずLiuの結果により、体積が最大値へ十分近い多様体の複素構造を $\mathbf{CP}^n$ と同定する。次に、反例列を仮定して概Einstein計量のGromov–Hausdorff極限を取り、Tian–Wangの構造定理を用いて極限をFubini–Study計量と同定することで矛盾を導く。Introductionは、Ricci曲率下界をもつ非崩壊Kähler極限に関するLiu–Székelyhidiの結果を用いる別証明も案内する。

## 原論文との対応

- **Abstractページ:** [arXiv:2010.10925](https://arxiv.org/abs/2010.10925)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 1
- **論文構成の説明:** p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
