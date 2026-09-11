---
layout: paper
title: "Notes on weighted Kähler-Ricci solitons and application to Ricci-flat Kähler cone metrics"
title_ja: "重み付きKähler–RicciソリトンとRicci平坦Kähler錐計量への応用"
authors: "Chi Li"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  This is largely an exposition article that expands the author's talk at the Xiamen International Conference on Geometric Analysis in June 2021. We first survey the author's joint work with Jiyuan Han on the Yau-Tian-Donaldson (YTD) conjecture for $g$-weighted Kähler-Ricci solitons ($g$-solitons). We then review recent works of Apostolov-Canderbank-Jubert-Lahdili which establish a connection between a particular $g$-soliton equation with Ricci-flat Kähler cone metrics (or equivalently Sasaki-Einstein metrics). The main interest in this connection is the transformation of a possibly irregular Sasaki-Einstein metric to a particular $g$-soliton equation on any quasi-regular quotient. We will revisit this transformation by understanding how the corresponding transversal complex Monge-Ampère equations are transformed under the deformation of Reeb vector fields. Finally we explain how this PDE/pluripotential point of view allows one to prove the YTD conjecture for general Fano cones by combining the YTD conjecture for $g$-solitons on log Fano pairs and the above transformation.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - monge-ampere-equations
  - pluripotential-theory
  - k-stability
  - fano-varieties
arxiv_id: "2107.02088v1"
arxiv_url: "https://arxiv.org/abs/2107.02088"
arxiv_submitted: "2021-07-05"
arxiv_updated: "2021-07-05"
summary: >-
  $g$-重み付きKähler–RicciソリトンのYau–Tian–Donaldson対応を概説し、特別な $g$-ソリトン方程式とRicci平坦Kähler錐の対応を整理する。Reebベクトル場の変形による横断的Monge–Ampère方程式の変換を通じ、対数Fano対上の理論から一般のFano錐に対するYTD予想へ至る道筋を示す。
abstract_en: >-
  This is largely an exposition article that expands the author's talk at the Xiamen International Conference on Geometric Analysis in June 2021. We first survey the author's joint work with Jiyuan Han on the Yau-Tian-Donaldson (YTD) conjecture for $g$-weighted Kähler-Ricci solitons ($g$-solitons). We then review recent works of Apostolov-Canderbank-Jubert-Lahdili which establish a connection between a particular $g$-soliton equation with Ricci-flat Kähler cone metrics (or equivalently Sasaki-Einstein metrics). The main interest in this connection is the transformation of a possibly irregular Sasaki-Einstein metric to a particular $g$-soliton equation on any quasi-regular quotient. We will revisit this transformation by understanding how the corresponding transversal complex Monge-Ampère equations are transformed under the deformation of Reeb vector fields. Finally we explain how this PDE/pluripotential point of view allows one to prove the YTD conjecture for general Fano cones by combining the YTD conjecture for $g$-solitons on log Fano pairs and the above transformation.
summary_en: ""
abstract_ja: >-
  本稿は $g$-重み付きKähler–Ricciソリトンに対するYau–Tian–Donaldson予想を概説し、特定の $g$-ソリトン方程式とRicci平坦Kähler錐計量、同値にSasaki–Einstein計量との関係を解説する。不正則なSasaki–Einstein計量を準正則商上の方程式へ移す際、Reebベクトル場の変形が横断的複素Monge–Ampère方程式をどう変換するかを明らかにする。この偏微分方程式・多重ポテンシャル論的視点と対数Fano対の結果を組み合わせ、一般Fano錐のYTD予想を導く。
abstract_source_url: "https://arxiv.org/abs/2107.02088"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2107.02088v1](https://arxiv.org/abs/2107.02088)
- **著者:** Chi Li
- **初回投稿日:** 2021年7月5日
- **最終更新日:** 2021年7月5日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

本稿は講演を拡張した概説であり、二つのYau–Tian–Donaldson（YTD）問題を一つの解析的枠組みで結ぶ。前半はFano多様体上の $g$-重み付きKähler–Ricciソリトンについて、エネルギー汎関数、安定性、対数Fano対への拡張を整理する。

後半はRicci平坦Kähler錐、すなわちSasaki–Einstein幾何へ応用する。不正則なReebベクトル場を準正則なものへ変形し、準正則商上で特別な $g$-ソリトン方程式として読み替えることが核心である。

横断的複素Monge–Ampère方程式の変換を追うことで、対数Fano対の $g$-ソリトンに対するYTD定理と代数的な錐の安定性を接続する。その結果、一般のFano錐におけるRicci平坦錐計量の存在と安定性の対応が説明される。

## 背景と問題設定

$n$ 次元Fano多様体 $X$ に実トーラス $T$ が作用し、そのmoment写像を $m_\varphi:X\to P$ とする。moment polytope $P$ 上の正の滑らかな関数 $g$ に対する $g$-ソリトン方程式は

$$
g(m_\varphi)(\omega_0+\sqrt{-1}\partial\bar\partial\varphi)^n=e^{-\varphi}\Omega_0
$$

である。通常のKähler–Ricciソリトンを含むこの方程式について、解の存在を適切な重み付き安定性で特徴づけることが第一の問題となる。第二の問題は、Fano錐上の不正則なSasaki–Einstein計量を商空間上のこの理論へ移すことである。

## 主結果

### $g$-ソリトンのYTD対応

本稿は概説として、対数Fano対上の $g$-ソリトン方程式について、解析的な汎関数の固有性と代数的な一様 $g$-Ding安定性を対応させる理論をまとめる。Introductionでは個別の新規定理としてではなく、著者とJiyuan Hanの共同研究を含む既知の枠組みの解説として述べられている。

### Fano錐への移送

特定の重み $g$ を選ぶと、準正則商上の $g$-ソリトン方程式がRicci平坦Kähler錐計量の方程式に対応する。Reebベクトル場を不正則なものから準正則なものへ変形し、横断的Monge–Ampère方程式と安定性がどう移るかを追うことで、一般Fano錐のYTD対応を得る。

## 証明の見取り図

前半では多重ポテンシャル論とfibration構成により、通常のエネルギー・変分理論を $g$-重み付き設定へ拡張する。後半ではReeb錐内の変形を用いて不正則問題を準正則商へ移し、解析方程式の変換と、錐の安定性と商の $g$-重み付き安定性との対応を組み合わせる。

## 原論文との対応

本記事はAbstract、冒頭の概説、および第1節冒頭の設定に基づく。原論文自体がsurveyを主とするため、結果の帰属を原論文の新規定理として扱わず、紹介される共同研究と先行研究の統合として記述した。
