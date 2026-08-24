---
layout: paper
title: "Prime Fano threefolds in positive characteristic"
title_ja: "正標数における素Fano三次元多様体"
authors: "Akihiro Kanemitsu, Hiromu Tanaka"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We prove that every prime Fano threefold of genus $\geq 7$ in positive characteristic is a linear section of a Mukai variety.
topic: algebraic-geometry
tags:
  - fano-varieties
  - positive-characteristic
arxiv_id: "2608.21263v1"
arxiv_url: "https://arxiv.org/abs/2608.21263"
arxiv_submitted: "2026-08-21"
arxiv_updated: "2026-08-21"
summary: >-
  正標数上の素Fano三次元多様体について、種数6以上のMukaiによる射影幾何モデルを完成させる。種数7, 9, 10では斉次多様体の線形切断、種数12では交代形式のnetから定まるMukai多様体として具体化される。
abstract_en: ""
summary_en: >-
  The paper completes the positive-characteristic projective description of prime Fano threefolds in genus at least six. For genera seven, nine, and ten, the threefold is realized as a linear section of the corresponding Mukai variety. In genus twelve it is identified with a variety determined by a nondegenerate net of alternating forms. The construction uses Mukai bundles and treats obstacles that do not occur in characteristic zero.
abstract_ja: >-
  正標数上の種数7以上の素Fano三次元多様体がMukai多様体の線形切断として表されることを証明する。既知の種数6, 8の場合と合わせ、種数6以上のMukaiモデルを完成させる。
abstract_source_url: "https://arxiv.org/abs/2608.21263"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.21263v1](https://arxiv.org/abs/2608.21263)
- **著者:** Akihiro Kanemitsu, Hiromu Tanaka
- **初回投稿日・最終更新日:** 2026-08-21
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標数0の素Fano三次元多様体には、Mukaiが発見した斉次多様体またはそれに近い射影多様体の線形切断による明示的モデルがある。本論文は、正標数で同じ記述がどこまで成立するかという問題を扱う。

対象は代数閉体上の滑らかな射影三次元多様体 $X$ で、$-K_X$ がampleかつ $\operatorname{Pic}X$ が $\omega_X$ で生成されるものである。種数 $g$ は

$$
(-K_X)^3=2g-2
$$

によって定義される。

主定理は種数 $g\geq6$ の全場合に具体的モデルを与える。とくに今回新たに扱う $g=7,9,10,12$ と既知の $g=6,8$ を合わせ、正標数版のMukai記述が完成する。

## 背景と問題設定

正標数でのMori–Mukai分類は近年完成したが、分類表だけでなく反標準埋め込みの幾何を明示するMukaiモデルの存在は別問題であった。正標数では消滅定理や一般超平面切断に標数0と同じ議論をそのまま適用できないため、Mukai束からGrassmann多様体への写像を精密に制御する必要がある。

## 主結果

### Mukaiモデルによる分類（Theorem 1.2）

$k$ を標数 $p>0$ の代数閉体、$X$ を種数 $g\geq6$ の素Fano三次元多様体とする。Introductionに列挙された結論は次の通りである。

- $g=6$ では $X$ は $C\operatorname{Gr}(5,2)\subset\mathbb P^{10}$ と一つの二次超曲面および三超平面との完全交叉である。
- $g=7$ では $X\simeq\Sigma_7\cap L\subset\mathbb P^{15}$、$\dim L=8$ である。
- $g=8$ では $X\simeq\Sigma_8\cap L\subset\mathbb P^{14}$、$\dim L=9$ である。
- $g=9$ では $X\simeq\Sigma_9\cap L\subset\mathbb P^{13}$、$\dim L=10$ である。
- $g=10$ では $X\simeq\Sigma_{10}\cap L\subset\mathbb P^{13}$、$\dim L=11$ である。
- $g=12$ では、7次元空間 $W_7$、3次元空間 $N_3$ と非退化な交代形式のnet $\nu:\bigwedge^2W_7\to N_3$ が存在し、$X\simeq\Sigma_{12}(\nu)$ となる。

ここで $\Sigma_7,\Sigma_8,\Sigma_9,\Sigma_{10}$ はそれぞれspinor多様体、Grassmann多様体、Lagrangian Grassmann多様体、$G_2/P$ である。

## 証明の見取り図

$g=9,10,12$ ではMukai束 $Q_X$ の大域切断から $X\to\operatorname{Gr}(V,r)$ を作る。一般の反標準K3曲面への制限が閉埋め込みであることを示し、写像そのものを閉埋め込みへ引き上げ、外積切断の核から $X$ を含む $\Sigma_g$ を構成し、最後に次数と次元の比較で線形切断であることを得る。$g=7$ はspinor多様体と標準曲線の幾何を別に用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.21263](https://arxiv.org/abs/2608.21263)
- **Introduction:** Section 1, pp. 2–7
- **主要定理:** Theorem 1.2
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
