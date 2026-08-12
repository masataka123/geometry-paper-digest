---
layout: paper
title: "A criterion for associated bundles and the weak Beauville--Bogomolov decomposition"
title_ja: "随伴束の判定法と弱Beauville–Bogomolov分解"
authors: "Yang Zhang"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.10219v1"
arxiv_url: "https://arxiv.org/abs/2608.10219"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  数値的平坦な直像層を用いて、ファイブレーションがtorsorから作られる随伴ファイバー束であるための標数に依らない判定法を与える。これを反標準因子がnefな特異対へ適用し、正標数と複素数体の双方でAlbanese射の弱Beauville–Bogomolov分解と斉次性を導く。
abstract_en: ""
summary_en: >-
  The paper gives a characteristic-free criterion ensuring that a projective family of pairs is an associated fibre bundle. The criterion encodes the family through numerically flat direct-image bundles and the S-fundamental group scheme. It answers an isotriviality question in positive characteristic under strong F-regularity and a nef relative log-anticanonical divisor, while retaining the boundary data. Applications include weak Beauville–Bogomolov decompositions for Albanese morphisms, finite trivializations in additional cases, and homogeneous fibrations over abelian varieties.
abstract_ja: >-
  本論文は、ファイブレーションがtorsorに随伴するファイバー束となるための判定法を構成する。相対ample直線束の直像と境界成分を差し引いた直像が数値的平坦であれば、S基本群スキームの商が作用する随伴束として族全体を復元できる。これをnefな相対log反標準因子を持つ対に適用し、正標数におけるisotriviality問題への肯定解と、nef反標準因子を持つ多様体の弱Beauville–Bogomolov分解を得る。
abstract_source_url: "https://arxiv.org/abs/2608.10219"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.10219](https://arxiv.org/abs/2608.10219)
- **著者:** Yang Zhang
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

すべての幾何学的ファイバーが同型なisotrivial族は、精密モジュライ空間の存在を妨げる典型例である。torsor $Y'\to Y$ とファイバー $(W,\Theta)$ への群 $G$ の作用から対角商 $(Y'\times W,Y'\times\Theta)/G$ を作ればisotrivial族を得るが、逆に与えられた族がこの形を持つかは自明でない。

本論文は、相対ample直線束の直像が数値的平坦であることから、族を随伴束として復元する標数に依らない判定法を与える。LangerのS基本群スキームとS普遍被覆を用いることで、複素解析的な平坦接続に依存していた従来の議論を純代数的に置き換え、境界付きの対も同時に扱う。

主要な応用は、完全体上の正標数で、幾何学的生成ファイバーがstrongly F-regularかつ相対log反標準因子がnefであるファイブレーションを随伴束と示すことである。これはIntroductionに掲げられたEjiriのisotriviality問題へ、穏やかな追加仮定の下でより強い肯定解を与える。

底をAlbanese多様体にすると、nef反標準因子を持つ対について弱Beauville–Bogomolov分解が得られる。複素数体上ではklt対に同様の結果が成立し、さらにAlbanese射が平行移動で不変な斉次射であることまで従う。

## 背景と問題設定

滑らかな複素射影多様体 $X$ で $c_1(X)=0$ の場合、古典的Beauville–Bogomolov分解はAlbanese射 $X\to\operatorname{Alb}X$ を、Albanese多様体の位相的普遍被覆に随伴するファイバー束として記述する。その後、境界やklt特異点を許し、$-K_X-\Delta$ のnef性だけからAlbaneseの構造を制約する方向へ一般化されてきた。

正標数では、Ejiriがglobally F-splitかつstrongly F-regularな射影対についてAlbanese射のisotrivialityを示した。しかし任意の底上の族や境界を含む随伴束構造までは分からなかった。本論文は、数値的平坦束全体のTannaka双対である $\pi_1^S(Y,y)$ と、そのprincipal bundleであるS普遍被覆 $\widetilde Y^S\to Y$ を代数的な基本群・普遍被覆として用いる。

## 主結果

### 随伴束判定法（Theorem 1.5 = Theorem 3.6）

$k$ を標数 $p\geq0$ の完全体、$f:(X,\Delta)\to Y$ を射影対から滑らかな射影多様体への射、$y\in Y(k)$ とする。ある $f$-ample直線束 $L$ があり、すべての $m>0$ について

$$
f_*L^{\otimes m}
$$

が数値的平坦であり、さらに $\Delta$ の各既約成分 $D$ ごとにある $r>0$ が存在して

$$
f_*\bigl(L^{\otimes m}(-rD)\bigr)
$$

もすべての $m>0$ で数値的平坦と仮定する。このとき $\pi_1^S(Y,y)$ の商である線形代数群 $G$ とprincipal $G$-bundle $P\to Y$ が存在し、$f$ はファイバー $(X_y,\Delta_y)$ を持つ $P$ の随伴束となる。特にS普遍被覆 $\widetilde Y^S\to Y$ に随伴する束である。

### 正標数の相対反標準nef族（Theorem 1.6 = Theorem 3.17）

$p>0$ の完全体上で $f:(X,\Delta)\to Y$ を全射ファイブレーションとする。$(X,\Delta)$ がCohen–Macaulay射影対、$Y$ が $k$-有理点 $y$ を持つ滑らかな射影多様体、幾何学的生成ファイバーがstrongly F-regularであり、

$$
-K_{X/Y}-\Delta
$$

がnefでCartier指数が $p$ と互いに素なら、$f$ は $(X_y,\Delta_y)$ をファイバーとするS普遍被覆の随伴束である。従って単なるisotrivialityより強く、族のねじれをS基本群スキームの作用として記述する。

### 正標数の弱Beauville–Bogomolov分解（Theorem 1.7 = Corollary 3.20）

$(X,\Delta)$ を $p>0$ の完全体上のglobally F-splitかつstrongly F-regularな射影対とし、$-K_X-\Delta$ はnefでCartier指数が $p$ と互いに素とする。Albanese $A$ が有理点 $0$ を持てば、

$$
(X,\Delta)\longrightarrow A
$$

は $(X_0,\Delta_0)$ をファイバーとするS普遍被覆 $\widetilde A^S\to A$ の随伴束である。

### 有限被覆後の自明化（Theorems 1.8, 1.10）

底体が無限で、ある $p$ と互いに素な $m$ に対して $m(-K_X-\Delta)$ がCartierかつbase point freeなら、Albanese射はあるisogeny $A'\to A$ に随伴する束となる。底体が有限の場合には、$-K_X-\Delta$ がnefという仮定だけで同じ有限isogenyによる記述を得る。

この過程で用いるTheorem 1.9は、strongly F-regular proper pairとbase point freeな有効 $\mathbb Q$-因子 $\Delta'$ に対し、一般の $\Gamma\in|m\Delta'|$ を選んでも

$$
\left(X,\Delta+\frac1m\Gamma\right)
$$

がglobally F-splitかつstrongly F-regularとなるBertini型結果である。

### 複素数体上のklt対（Theorems 1.11, 1.12）

$f:(X,\Delta)\to Y$ を複素数体上の全射ファイブレーションとし、$(X,\Delta)$ が射影klt、$Y$ が点 $y$ を持つ滑らかな射影多様体、$-K_{X/Y}-\Delta$ がnefなら、$f$ はS普遍被覆に随伴する $(X_y,\Delta_y)$-bundleである。特に射影klt対で $-K_X-\Delta$ がnefなら、そのAlbanese射に弱Beauville–Bogomolov分解が成立する。

### Albanese射の斉次性（Theorem 1.14, Corollary 1.15）

代数閉体上のAbel多様体 $A$ へのS普遍被覆の随伴束は斉次、すなわち $A$ の任意の平行移動によるpullbackと同型である。従って、複素数体上のnef反標準klt対、および正標数の対応するF特異点条件を満たす対のAlbanese射は斉次となる。

## 証明の見取り図

族は相対ample直線束 $L$ の切断環、特に積写像 $\operatorname{Sym}^m f_*L\to f_*L^m$ に符号化される。数値的平坦束はTannaka圏をなし、S普遍被覆へ引き戻すと自明化する。積写像と境界成分を定める射もこのTannaka構造と整合するため、引き戻した族は一定となり、その降下データを $\pi_1^S(Y,y)$ の有限型商 $G$ の作用へまとめる。これがTheorem 1.5の随伴束表示を与える。

相対log反標準因子がnefな族では、先行研究の正値性結果から適切な相対ample $L$ の直像の数値的平坦性を作り、判定法へ入力する。正標数では解析的な平坦接続を使わず、LangerのTannaka的S基本群を用いることが、任意の底と境界を扱える鍵である。

半ampleの場合の有限化にはlog-K-trivial対のBeauville–Bogomolov分解と新しいBertini型定理を組み合わせる。最後に、Abel多様体の平行移動がS普遍被覆の随伴束構造を保つことを示し、弱分解からAlbanese射の斉次性を導く。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.10219](https://arxiv.org/abs/2608.10219)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.5–1.14; Corollary 1.15
- **論文構成の説明:** Introduction, Sections 1.1–1.4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
